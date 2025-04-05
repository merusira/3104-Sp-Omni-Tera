'use strict'

const subMod = require('./require')

class SPCooldowns {
	constructor(mod) {
		// Initialize properties
		this.loaded = false
		this.mod = mod
		this.timeouts = new Map()
		this.hooks = []
		
		// Lazy-loaded ping module
		let _ping
		
		// Define getter for lazy loading
		Object.defineProperty(this, 'ping', {
			get() {
				if (!_ping) _ping = subMod(this.mod, './ping')
				return _ping
			}
		})

		// Load immediately
		this.load()
	}

	load() {
		if(this.loaded) return

		// Pre-bind event handlers to avoid creating new function objects on each event
		const handleCooldown = event => {
			if(event.cooldown > 0) {
				// Adjust cooldown based on ping
				event.cooldown = Math.max(0, event.cooldown - this.ping.min)
				this.set(event.skill, event.cooldown)
				return true
			}

			this.end(event.skill)
		}
		
		const handleLoadTopo = () => { this.reset() }

		// Register hooks with pre-bound handlers
		this.addHook('S_START_COOLTIME_SKILL', 3, handleCooldown)
		// this.addHook('S_DECREASE_COOLTIME_SKILL', 3, handleCooldown)
		this.addHook('S_LOAD_TOPO', 'raw', handleLoadTopo)

		this.loaded = true
	}
	
	// Helper method to add hooks
	addHook(...args) {
		this.hooks.push(this.mod.hook(...args))
	}

	// Check if a skill is on cooldown
	check({id}) {
		return this.timeouts.has(id)
	}

	// Set a skill on cooldown
	set({id}, time) {
		// End any existing cooldown
		this.end({id})

		// Only set a new timeout if time is positive
		if(time > 0) {
			// Use mod.setTimeout for proper cleanup
			this.timeouts.set(id, this.mod.setTimeout(() => {
				this.end({id})
			}, time))
		}
	}

	// End a skill's cooldown
	end({id}) {
		const timeout = this.timeouts.get(id)
		if(timeout) {
			// Use mod.clearTimeout for proper cleanup
			this.mod.clearTimeout(timeout)
			this.timeouts.delete(id)
		}
	}

	// Reset all cooldowns
	reset() {
		// Use Map.keys() for more efficient iteration
		for(const id of this.timeouts.keys()) {
			this.end({id})
		}
	}

	// Unload the module
	unload() {
		if(!this.loaded) return

		// Reset cooldowns
		this.reset()

		// Unhook all hooks
		for(const hook of this.hooks) {
			this.mod.unhook(hook)
		}

		// Clear arrays
		this.hooks = []
		this.loaded = false
	}
}

module.exports = SPCooldowns