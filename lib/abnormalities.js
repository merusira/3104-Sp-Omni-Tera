'use strict'

const subMod = require('./require'),
	abnormals = require('../config/abnormalities')

class SPAbnormals {
	constructor(mod) {
		this.mod = mod

		// Lazy load dependencies
		let _player, _ping
		
		// Define getters for lazy loading
		Object.defineProperties(this, {
			player: {
				get() {
					if (!_player) _player = subMod(mod, './player')
					return _player
				}
			},
			ping: {
				get() {
					if (!_ping) _ping = subMod(mod, './ping')
					return _ping
				}
			}
		})

		// Use a Map for better performance with large sets of abnormalities
		this.myAbnormals = new Map()
		
		// Cache for abnormal info lookups
		this.abnormalInfoCache = new Map()

		// Pre-bind event handlers to avoid creating new function objects on each event
		const onReturnToLobby = () => { this.removeAll() }
		const onCreatureLife = event => {
			if(event.gameId === this.player.gameId && !event.alive) this.removeAll()
		}
		
		// Pre-bind abnormality handlers
		const abnormalityUpdate = (type, event) => {
			if(event.target !== this.player.gameId) return

			// Get abnormality info with caching
			const info = this.getAbnormalInfo(event.id)
			const isBlocked = info === true
			
			// Debug logging with cached check result
			if(mod.settings.debug.abnormals) {
				debug(isBlocked ? '<X' : '<-', type, event.id, event.duration, event.stacks)
			}

			// Early return for blocked abnormalities
			if(isBlocked) return false

			// Handle abnormality overrides
			if(info && info.overrides && this.exists(info.overrides)) {
				this.remove(info.overrides)
			}

			// Adjust duration based on ping
			if(event.duration !== 0x7fffffff) {
				event.duration = Math.max(event.duration - this.ping.min, 0)
			}

			// Transform packet type for consistency
			if(type === 'S_ABNORMALITY_BEGIN' === this.exists(event.id)) {
				this.add(event.id, event.duration, event.stacks)
				return false
			}

			this._add(event.id, event.duration)
			return true
		}
		
		const abnormalityEnd = event => {
			if(event.target !== this.player.gameId) return

			// Get abnormality info with caching
			const isBlocked = this.getAbnormalInfo(event.id) === true
			
			// Debug logging with cached check result
			if(mod.settings.debug.abnormals) {
				debug(isBlocked ? '<X' : '<-', 'S_ABNORMALITY_END', event.id)
			}

			// Early return for blocked abnormalities
			if(isBlocked) return false
			
			// Skip if we don't have this abnormality
			if(!this.exists(event.id)) return false

			this._remove(event.id)
		}

		// Pre-bind functions to avoid creating new function objects on each hook
		const abnormalityBegin = event => abnormalityUpdate('S_ABNORMALITY_BEGIN', event)
		const abnormalityRefresh = event => abnormalityUpdate('S_ABNORMALITY_REFRESH', event)

		// Register hooks
		mod.hook('S_RETURN_TO_LOBBY', 1, onReturnToLobby)
		mod.hook('S_CREATURE_LIFE', 3, onCreatureLife)
		mod.hook('S_ABNORMALITY_BEGIN', 3, abnormalityBegin)
		mod.hook('S_ABNORMALITY_REFRESH', 1, abnormalityRefresh)
		mod.hook('S_ABNORMALITY_END', 1, abnormalityEnd)
	}

	// Get abnormality info with caching for performance
	getAbnormalInfo(id) {
		if (!this.abnormalInfoCache.has(id)) {
			this.abnormalInfoCache.set(id, abnormals[id])
		}
		return this.abnormalInfoCache.get(id)
	}

	exists(id) {
		// Use Map.has for better performance
		return this.myAbnormals.has(id)
	}

	inMap(map) {
		// Use Map.keys() iterator for better performance
		for (const id of this.myAbnormals.keys()) {
			// Check if the map has the id, supporting both Sets and Objects
			if ((map instanceof Set && map.has(id)) || (map[id])) return true
		}
		return false
	}

	add(id, duration, stacks) {
		// Determine packet type and version based on whether abnormality already exists
		const abnormalExists = this.exists(id)
		const type = abnormalExists ? 'S_ABNORMALITY_REFRESH' : 'S_ABNORMALITY_BEGIN'
		const version = abnormalExists ? 1 : 3

		// Debug logging
		if(this.mod.settings.debug.abnormals) {
			debug('<*', type, id, duration, stacks)
		}

		// Create packet object once and reuse
		const packet = {
			target: this.player.gameId,
			source: this.player.gameId,
			id,
			duration,
			unk: 0,
			stacks,
			unk2: 0
		}

		// Send packet to client
		this.mod.toClient(type, version, packet)

		// Update internal state
		this._add(id, duration)
	}

	remove(id) {
		// Early return if abnormality doesn't exist
		if(!this.exists(id)) return

		// Debug logging
		if(this.mod.settings.debug.abnormals) {
			debug('<* S_ABNORMALITY_END', id)
		}

		// Create packet object once
		const packet = {
			target: this.player.gameId,
			id
		}

		// Send packet to client
		this.mod.toClient('S_ABNORMALITY_END', 1, packet)

		// Update internal state
		this._remove(id)
	}

	removeAll() {
		// Use Map.keys() for more efficient iteration
		for (const id of this.myAbnormals.keys()) {
			this.remove(id)
		}
	}

	_add(id, duration) {
		// Clear existing timeout if any
		const existingTimeout = this.myAbnormals.get(id)
		if(existingTimeout && existingTimeout !== true) {
			this.mod.clearTimeout(existingTimeout)
		}
		
		// Set as permanent or with timeout
		const timeoutValue = duration >= 0x7fffffff
			? true
			: this.mod.setTimeout(() => { this.remove(id) }, duration)
			
		this.myAbnormals.set(id, timeoutValue)
	}

	_remove(id) {
		// Only clear timeout if it exists and is not a boolean
		const timeout = this.myAbnormals.get(id)
		if(timeout && timeout !== true) {
			this.mod.clearTimeout(timeout)
		}
		
		// Remove from tracking
		this.myAbnormals.delete(id)
	}
}

// Optimize debug function
function debug() {
	// Only calculate timestamp once
	const timestamp = `[${(Date.now() % 10000).toString().padStart(4, '0')}]`
	console.log(timestamp, ...arguments)
}

module.exports = SPAbnormals
