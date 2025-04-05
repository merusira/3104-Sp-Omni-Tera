'use strict'

/**
 * Player module - Optimized for better performance
 * Tracks player state including stats, equipment, and status
 */

// Constants
const NOCTAN = new Set([1206, 1210, 1230, 1300, 1301, 1302, 1303, 81212, 201225])
const HOOK_LAST = {order: 100, filter: {fake: null}}
const WEAPON_SLOT = 1
const EQUIPMENT_MAX_SLOT = 40

class SPPlayer {
	/**
	 * Reset player state to defaults
	 * Direct property assignment is faster than Object.assign for this use case
	 */
	reset() {
		// Session
		this.gameId = -1n
		this.templateId = -1
		this.race = -1
		this.job = -1

		// Status
		this.mounted = false

		// Combat stats
		this.attackSpeed = 1
		this.stamina = 0

		// Crests - reuse Set if possible to reduce garbage collection
		if (!this.crests) {
			this.crests = new Set()
		} else {
			this.crests.clear()
		}

		// Equipment / Inventory
		this.hasWeapon = false
		this.itemPassives = []
		this.hasNocTan = false
		
		// Cache for calculations
		this._isNewClass = false
		this._speedDivisor = 1
	}

	constructor(mod) {
		// Initialize state
		this.reset()
		
		// Pre-bind methods to avoid creating new function objects
		this._onLogin = this._onLogin.bind(this)
		this._onReturnToLobby = this._onReturnToLobby.bind(this)
		this._onMount = this._onMount.bind(this)
		this._onUnmount = this._onUnmount.bind(this)
		this._onStatUpdate = this._onStatUpdate.bind(this)
		this._onStaminaChange = this._onStaminaChange.bind(this)
		this._onCrestInfo = this._onCrestInfo.bind(this)
		this._onCrestApply = this._onCrestApply.bind(this)
		this._onInventory = this._onInventory.bind(this)
		
		// Register hooks with pre-bound handlers
		mod.hook('S_LOGIN', 12, HOOK_LAST, this._onLogin)
		mod.hook('S_RETURN_TO_LOBBY', 'raw', this._onReturnToLobby)
		
		// Status
		mod.hook('S_MOUNT_VEHICLE', 2, this._onMount)
		mod.hook('S_UNMOUNT_VEHICLE', 2, this._onUnmount)
		
		// Combat stats
		mod.hook('S_PLAYER_STAT_UPDATE', 10, HOOK_LAST, this._onStatUpdate)
		mod.hook('S_PLAYER_CHANGE_STAMINA', 1, HOOK_LAST, this._onStaminaChange)
		
		// Crests
		mod.hook('S_CREST_INFO', 2, this._onCrestInfo)
		mod.hook('S_CREST_APPLY', 2, this._onCrestApply)
		
		// Equipment / Inventory
		this._inventoryItems = null
		mod.hook('S_INVEN', mod.majorPatchVersion >= 74 ? 18 : 17, this._onInventory)
	}
	
	// Event handlers
	_onLogin(event) {
		this.reset()
		
		// Set player data
		this.gameId = event.gameId
		this.templateId = event.templateId
		
		// Calculate race and job once
		this.race = Math.floor(event.templateId / 100) % 100 - 1
		this.job = event.templateId % 100 - 1
		
		// Cache class type for speed calculations
		this._isNewClass = this.job >= 8
		this._speedDivisor = this._isNewClass ? 100 : 1
	}
	
	_onReturnToLobby() {
		this.reset()
	}
	
	_onMount(event) {
		if (event.gameId === this.gameId) {
			this.mounted = true
		}
	}
	
	_onUnmount(event) {
		if (event.gameId === this.gameId) {
			this.mounted = false
		}
	}
	
	_onStatUpdate(event) {
		// Calculate attack speed more efficiently
		const totalAttackSpeed = event.attackSpeed + event.attackSpeedBonus
		this.attackSpeed = totalAttackSpeed / (this._isNewClass ? 100 : event.attackSpeed)
		
		// Update stamina
		this.stamina = event.stamina
	}
	
	_onStaminaChange(event) {
		this.stamina = event.current
	}
	
	_onCrestInfo(event) {
		// Clear and repopulate crests
		this.crests.clear()
		
		// Use for...of for better performance with early continue
		for (const crest of event.crests) {
			if (crest.enable) {
				this.crests.add(crest.id)
			}
		}
	}
	
	_onCrestApply(event) {
		// Use direct method calls instead of computed property
		if (event.enable) {
			this.crests.add(event.id)
		} else {
			this.crests.delete(event.id)
		}
	}
	
	_onInventory(event) {
		// Handle inventory updates
		if (event.first) {
			this._inventoryItems = event.items
		} else if (this._inventoryItems) {
			this._inventoryItems = this._inventoryItems.concat(event.items)
		}
		
		// Process complete inventory
		if (!event.more && this._inventoryItems) {
			this._processInventory(this._inventoryItems)
			this._inventoryItems = null
		}
	}
	
	// Process inventory items more efficiently
	_processInventory(items) {
		// Check for weapon first (common case)
		this.hasWeapon = items.some(item => item.slot === WEAPON_SLOT)
		
		// Reset passives and noctan flag
		this.itemPassives = []
		this.hasNocTan = false
		
		// Process all items
		for (const item of items) {
			// Check for equipment with passivity sets
			if (item.slot < EQUIPMENT_MAX_SLOT && item.passivitySets) {
				const passivitySet = item.passivitySets.find(set => set.index === item.passivitySet)
				
				if (passivitySet) {
					// Process passivities more efficiently
					for (const passive of passivitySet.passivities) {
						if (passive && passive.id) {
							this.itemPassives.push(passive.id)
						}
					}
				}
			}
			// Check for noctan items
			else if (NOCTAN.has(item.id)) {
				this.hasNocTan = true
				// Early exit if we've already found a weapon and noctan
				if (this.hasWeapon) {
					break
				}
			}
		}
	}
}

module.exports = SPPlayer