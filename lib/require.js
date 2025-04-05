'use strict'

// Use WeakMap for better memory management - allows garbage collection when dispatch is no longer referenced
const dispatchMap = new WeakMap()

/**
 * Module dependency manager that ensures each module is only instantiated once per dispatch
 * @param {Object} dispatch - The dispatch object
 * @param {String} path - The path to the module
 * @returns {Object} The module instance
 */
module.exports = function RequireMod(dispatch, path) {
	// Get or create the module map for this dispatch
	let modMap = dispatchMap.get(dispatch)
	if (!modMap) {
		modMap = new Map()
		dispatchMap.set(dispatch, modMap)
	}

	// Try to get the module constructor
	let Mod
	try {
		Mod = require(path)
	} catch (e) {
		console.error(`[skill-prediction] Failed to load module ${path}:`, e)
		return null
	}

	// Get or create the module instance
	let instance = modMap.get(Mod)
	if (!instance) {
		try {
			instance = new Mod(dispatch)
			modMap.set(Mod, instance)
		} catch (e) {
			console.error(`[skill-prediction] Failed to instantiate module ${path}:`, e)
			return null
		}
	}

	return instance
}