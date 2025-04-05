'use strict'

class SPPing {
	constructor(mod) {
		// Initialize properties
		this.min = this.max = this.avg = 0
		this.history = []
		this.sum = 0 // Track sum for more efficient average calculation
		
		// Private variables with clear naming
		let pingTimeout = null,
			isPingWaiting = false,
			pingLastSent = 0,
			isPingDebounce = false,
			maxHistorySize = mod.settings.ping.maxHistory || 20

		// Pre-bind methods to avoid creating new function objects on each call
		const sendPing = () => {
			if (pingTimeout) clearTimeout(pingTimeout)
			
			mod.send('C_REQUEST_GAMESTAT_PING', 1)
			isPingWaiting = true
			pingLastSent = Date.now()
			pingTimeout = setTimeout(sendPing, mod.settings.ping.timeout)
		}
		
		// Clear ping timeout safely
		const clearPingTimeout = () => {
			if (pingTimeout) {
				clearTimeout(pingTimeout)
				pingTimeout = null
			}
		}

		// Hook game events with optimized handlers
		mod.hook('S_SPAWN_ME', 'raw', () => {
			clearPingTimeout()
			pingTimeout = setTimeout(sendPing, mod.settings.ping.interval)
		})

		mod.hook('S_LOAD_TOPO', 'raw', clearPingTimeout)
		mod.hook('S_RETURN_TO_LOBBY', 'raw', clearPingTimeout)

		// Disable inaccurate ingame ping so we have exclusive use of ping packets
		mod.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
			mod.send('S_RESPONSE_GAMESTAT_PONG', 1)

			// Use a single assignment for the conditional check and value update
			if(!isPingDebounce) {
				isPingDebounce = true
				mod.command.exec('sp ping') // Display accurate ping statistics in chat
			}

			return false
		})

		mod.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', () => {
			const now = Date.now()
			const result = now - pingLastSent

			clearPingTimeout()
			isPingDebounce = false

			// Handle the case where we weren't waiting for a ping response
			if(!isPingWaiting) {
				if(this.history.length > 0) {
					// Remove the last value from our statistics
					const lastValue = this.history.pop()
					this.sum -= lastValue
					
					// We'll need to recalculate min/max if this was an extremum
					if(this.history.length > 0 && (lastValue === this.min || lastValue === this.max)) {
						this.updateMinMax()
					}
				}
			}

			// Update our statistics incrementally
			this.updateStats(result)

			// Maintain history size limit more efficiently
			if(this.history.length > maxHistorySize) {
				const removed = this.history.shift()
				this.sum -= removed
				
				// Recalculate min/max if we removed an extremum
				if(removed === this.min || removed === this.max) {
					this.updateMinMax()
				}
			}

			// Calculate next ping time, ensuring it's not negative
			const nextPingTime = Math.max(1, mod.settings.ping.interval - result)
			
			isPingWaiting = false
			pingTimeout = setTimeout(sendPing, nextPingTime)
			return false
		})
	}
	
	// Helper method to update statistics when adding a new ping value
	updateStats(value) {
		// Add to history and update sum
		this.history.push(value)
		this.sum += value
		
		// Update min/max more efficiently
		if(this.history.length === 1) {
			// First value
			this.min = this.max = value
		} else {
			// Update extrema if needed
			if(value < this.min) this.min = value
			if(value > this.max) this.max = value
		}
		
		// Calculate average without iterating through the array
		this.avg = this.sum / this.history.length
	}
	
	// Helper method to recalculate min/max when needed
	updateMinMax() {
		if(this.history.length === 0) {
			this.min = this.max = 0
			return
		}
		
		this.min = this.max = this.history[0]
		for(let i = 1; i < this.history.length; i++) {
			const p = this.history[i]
			if(p < this.min) this.min = p
			else if(p > this.max) this.max = p
		}
	}
}

module.exports = SPPing