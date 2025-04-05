'use strict'

// Core modules that need to be preloaded
const PRELOAD_MODULES = ['./core', './commands']

// Create a Set of obsolete mods for faster lookups
const OBSOLETE_MODS = new Set()

// Populate the obsolete mods set
;['cooldowns', 'lockons', 'lockons-light', 'fastfire', 'fast-fire', 'fast-block'].forEach(name => {
  OBSOLETE_MODS.add(name)
  OBSOLETE_MODS.add(name + '-master')
  OBSOLETE_MODS.add(name + '.js')
})

// Required Node.js modules
const path = require('path')
const fs = require('fs')
const subMod = require('./require')

// Check for incompatible mods
try {
  const modsDir = path.join(__dirname, '../..')
  const installedMods = fs.readdirSync(modsDir)
  
  for (const name of installedMods) {
    const lowerName = name.toLowerCase()
    if (OBSOLETE_MODS.has(lowerName)) {
      console.error(`ERROR: Skill Prediction is not compatible with the obsolete mod "${name}", please remove it and try again.`)
      module.exports = function() {} // Export empty function
      return
    }
  }
} catch (e) {
  console.error('ERROR: Failed to check for incompatible mods:', e)
  // Continue execution - this error shouldn't prevent the module from loading
}

// Pre-require core modules to ensure they're loaded
PRELOAD_MODULES.forEach(name => {
  try {
    require(name)
  } catch (e) {
    console.error(`ERROR: Failed to preload module ${name}:`, e)
    // Continue execution - we'll try again when initializing
  }
})

/**
 * Main module export - initializes Skill Prediction
 * @param {Object} mod - The mod object provided by Tera Toolbox
 * @returns {Object|undefined} The initialized module or undefined if initialization failed
 */
module.exports = function SkillPrediction(mod) {
  // Check if running on classic server
  if (mod.isClassic) {
    console.error('You are trying to use a patch 3104 Skill Prediction on a unsupported server.')
    return
  }
  
  // Initialize core modules
  try {
    // Load core modules with the mod context
    for (const name of PRELOAD_MODULES) {
      subMod(mod, name)
    }
    
    // Return the initialized module
    return mod
  } catch (e) {
    console.error('ERROR: Failed to initialize Skill Prediction:', e)
    return
  }
}