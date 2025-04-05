'use strict'

const {SkillID} = require('tera-data-parser').types

class SPDebug {
	constructor(mod) {
		this.mod = mod
		this.hooks = []
		
		// Cache for frequently accessed settings
		this.debugSkills = false
		this.debugLoc = false
		
		// Pre-compile packet hooks configuration for better performance
		this.skillPackets = [
			{name: 'S_CREST_APPLY', version: 2, cb: _ => [_.id, _.enable ? 'on' : 'off']},
			{name: 'S_CREST_MESSAGE', version: 2, cb: _ => [_.unk, _.type, skillId(_.skill)]},
			{name: 'S_CANNOT_START_SKILL', version: 4, cb: _ => skillId(_.skill.id)}
		]
		
		this.skillPackets2 = [
			{name: 'C_START_SKILL', version: 7, cb: _ => [Number(_.unk), Number(_.moving), Number(_.continue), gameId(_.target)], hasLoc: true, hasDest: true},
			{name: 'C_PRESS_SKILL', version: 4, cb: _ => _.press, hasLoc: true},
			{name: 'C_START_TARGETED_SKILL', version: 6, cb: _ => `[${_.targets.map(t => `${gameId(t.id)} ${t.unk}`).join(',')}]`, hasLoc: true, hasDest: true},
			{name: 'C_START_COMBO_INSTANT_SKILL', version: 4, cb: _ => `[${_.targets.map(t => `${t.unk1} ${gameId(t.target)} ${t.unk2}`).join(',')}]`, hasLoc: true, hasEndpoints: true},
			{name: 'C_START_INSTANCE_SKILL', version: 5, cb: _ => [_.unk, `[${_.targets.map(t => `${t.unk1} ${gameId(t.target)} ${t.unk2}`).join(',')}]`], hasLoc: true, hasEndpoints: true},
			{name: 'C_START_INSTANCE_SKILL_EX', version: 5, cb: _ => [_.unk, gameId(_.projectile)], hasLoc: true, hasDest: true},
			{name: 'C_NOTIMELINE_SKILL', version: 3},
			{name: 'S_GRANT_SKILL', version: 3},
			{name: 'C_CANCEL_SKILL', version: 3, cb: _ => _.type}
		]
		
		this.locationPackets = [
			'C_NOTIFY_LOCATION_IN_ACTION',
			'C_NOTIFY_LOCATION_IN_DASH'
		]
		
		// Initialize
		this.reload()
	}

	reload() {
		// Update cached settings
		this.debugSkills = this.mod.settings.debug.skills
		this.debugLoc = this.mod.settings.debug.loc
		
		// Unload existing hooks
		this.unload()

		// Only register hooks if debugging is enabled
		if (!this.debugSkills && !this.debugLoc) return

		// Skills
		if (this.debugSkills) {
			// Register first set of skill packets
			for (const packet of this.skillPackets) {
				this.hookFirst(packet.name, packet.version, packet.cb)
			}

			// Register second set of skill packets with more complex callback
			for (const packet of this.skillPackets2) {
				this.hookFirst(packet.name, packet.version, (event, name) => {
					// Process main callback result
					const mainResult = packet.cb ? packet.cb(event, name) : []
					const results = [skillId(event.skill)]
					
					// Add main callback results
					if (mainResult) {
						if (Array.isArray(mainResult)) {
							results.push(...mainResult)
						} else {
							results.push(mainResult)
						}
					}
					
					// Add location information if enabled
					if (this.debugLoc) {
						if (packet.hasLoc) {
							results.push(pos(event.loc))
						}
						
						if (packet.hasDest) {
							results.push(`> ${pos(event.dest)}`)
						}
						
						if (packet.hasEndpoints) {
							results.push(`> [${event.endpoints.map(p => pos(p.loc)).join(', ')}]`)
						}
					}
					
					return results
				})
			}
		}

		// Location
		if (this.debugLoc) {
			for (const packetName of this.locationPackets) {
				this.hookMod(packetName, 4, event => [
					skillId(event.skill),
					event.stage,
					pos(event.loc),
					dir(event.w)
				])
			}
		}
	}

	unload() {
		if (this.hooks.length) {
			for (const hook of this.hooks) {
				this.mod.unhook(hook)
			}
			this.hooks = []
		}
	}

	hookFirst(name, ver, cb) {
		this.hook(name, ver, {order: -999}, event => {
			const out = cb(event, name)
			debug(`${event.$incoming ? '<-' : '->'} ${name} ${Array.isArray(out) ? out.join(' ') : out}`)
		})
	}

	hookMod(name, ver, cb) {
		this.hook(name, ver, {order: 999, filter: {fake: null, silenced: null}}, event => {
			if (event.$fake && event.$silenced) return

			const out = cb(event, name)
			const typeChar = event.$silenced ? 'X' : (event.$fake ? '*' : (event.$modified ? '~' : '-'))

			debug(`${event.$incoming ? '<' + typeChar : typeChar + '>'} ${name} ${Array.isArray(out) ? out.join(' ') : out}`)
		})
	}

	hook(...args) {
		return this.hooks.push(this.mod.hook(...args))
	}

	toggle() {
		// Placeholder for future implementation
	}
}

// Utilities - Optimized for performance
// Cache timestamp calculation for multiple debug calls in the same millisecond
let lastTimestamp = 0
let cachedTimestampString = ''

function debug() {
	const now = Date.now()
	
	// Only recalculate timestamp if it changed
	if (now % 10000 !== lastTimestamp) {
		lastTimestamp = now % 10000
		cachedTimestampString = `[${lastTimestamp.toString().padStart(4, '0')}]`
	}
	
	console.log(cachedTimestampString, ...arguments)
}

// Pre-calculate constants
const PI_100 = Math.PI / 100

// Optimized position formatter
function pos(p) {
	return `(${p.roundN().toString()})`
}

// Optimized direction formatter
function dir(w) {
	return (Math.round(w * PI_100) / 100) + '/t'
}

// Optimized decimal formatter
function decimal(n, p) {
	const factor = 10 ** p
	return Math.round(n * factor) / factor
}

// Optimized gameId formatter
function gameId(id) {
	if (id === 0n) return '@'
	return '@' + id.toString(16).toUpperCase().padStart(16, '0')
}

// Optimized skillId formatter with caching
const skillIdCache = new Map()

function skillId(skill) {
	// Try to use cached result first
	const cacheKey = typeof skill === 'object' ? skill.id : skill
	
	if (skillIdCache.has(cacheKey)) {
		return skillIdCache.get(cacheKey)
	}
	
	// Convert to SkillID if needed
	if (!(skill instanceof SkillID)) skill = new SkillID(skill)

	let str = skill.reserved ? `[X${skill.reserved.toString(16)}]` : ''

	switch (skill.type) {
		case 1: str += 'A'; break
		case 2: str += 'R'; break
		default: str += `[T${skill.type}]`; break
	}

	let result
	if (skill.npc) {
		if (skill.type === 1) {
			result = `${str}${skill.huntingZoneId}:${skill.id}`
		} else {
			result = str + skill.id
		}
	} else {
		const id = skill.id.toString()

		switch (skill.type) {
			case 1: result = str + [id.slice(0, -4), id.slice(-4, -2), id.slice(-2)].join('-'); break
			case 2: result = str + [id.slice(0, -2), id.slice(-2)].join('-'); break
			default: result = str + id; break
		}
	}
	
	// Cache the result if cache isn't too large (prevent memory leaks)
	if (skillIdCache.size < 1000) {
		skillIdCache.set(cacheKey, result)
	}
	
	return result
}

// Export
module.exports = SPDebug