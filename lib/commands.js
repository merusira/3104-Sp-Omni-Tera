'use strict'

const subMod = require('./require')

module.exports = function SPCommands(mod) {
	// Modules are loaded lazily when needed
	let ping, debug

	// Cache for frequently used values
	const rtfmCommands = new Set(['info', 'strictdef', 'mount', 'off', 'on', 'config', 'debugloc', 'debugabnorm'])
	
	// Command handlers
	const handlers = {
		$default() { mod.command.message(`Unknown command "${this}".`) },
		$none: () => printHelp(),
		help: () => printHelp(),
		ping: () => {
			// Lazy load ping module only when needed
			if (!ping) ping = subMod(mod, './ping')
			
			// Direct message without wrapper function
			mod.command.message(`Ping: ${ping.history.length ?
				`Avg=${Math.round(ping.avg)} Min=${ping.min} Max=${ping.max} Jitter=${ping.max - ping.min} Samples=${ping.history.length}` :
				'???'}`)
		},
		debug(type = '') {
			// Lazy load debug module only when needed
			if (!debug) debug = subMod(mod, './debug')
			
			// Use a lookup object instead of multiple case statements
			const debugTypes = {
				'loc': () => toggleDebug('loc', 'Location'),
				'location': () => toggleDebug('loc', 'Location'),
				'abnormal': () => toggleDebug('abnormals', 'Abnormality'),
				'abnormals': () => toggleDebug('abnormals', 'Abnormality'),
				'abnormality': () => toggleDebug('abnormals', 'Abnormality'),
				'abnormalities': () => toggleDebug('abnormals', 'Abnormality'),
				'default': () => toggleDebug('skills', 'Skill')
			}
			
			// Execute the appropriate function or default
			const handler = debugTypes[type.toLowerCase()] || debugTypes.default
			handler()
			
			function toggleDebug(setting, label) {
				mod.settings.debug[setting] = !mod.settings.debug[setting]
				mod.command.message(`${label} debug ${mod.settings.debug[setting] ? 'enabled' : 'disabled'}.`)
				debug.reload()
			}
		}
	}
	
	// Add RTFM commands dynamically
	for (const cmd of rtfmCommands) {
		handlers[cmd] = () => {
			mod.command.message(`SaltyMonkey's public Skill-Prediction fork has been discontinued.
You are now using Pinkie Pie's SP modified by merusira, which doesn't support the command you tried.
Find merusira on discord or github.`)
		}
	}
	
	// Register all commands at once
	mod.command.add('sp', handlers)

	function printHelp() {
		mod.command.message(`Commands:
<FONT COLOR="#FFFFFF">ping</FONT> = Display ping statistics.
<FONT COLOR="#FFFFFF">debug [skill|loc|abnormal]</FONT> = Toggle debug modes.`)
	}
}