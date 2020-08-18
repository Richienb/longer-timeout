"use strict"

const MAX_TIMEOUT = 2147483647n

class Timeout {
	constructor(callback, timeout) {
		this.callback = callback
		this.timeout = BigInt(timeout)
		this.start()
	}

	start() {
		if (this.timeout <= MAX_TIMEOUT) {
			this.timeoutInstance = setTimeout(this.callback, Number(this.timeout))
		} else {
			this.timeoutInstance = setTimeout(() => {
				this.timeout -= MAX_TIMEOUT
				this.start()
			}, MAX_TIMEOUT)
		}
	}

	stop() {
		clearTimeout(this.timeoutInstance)
	}
}

class Interval {
	constructor(callback, interval) {
		this.callback = callback
		this.interval = BigInt(interval)
		this.remainingTime = this.interval
		this.start()
	}

	start() {
		if (this.remainingTime <= MAX_TIMEOUT) {
			this.timeoutInstance = setTimeout(() => {
				this.callback()
				this.remainingTime = this.interval
				this.start()
			}, Number(this.remainingTime))
		} else {
			this.timeoutInstance = setTimeout(() => {
				this.remainingTime -= MAX_TIMEOUT
				this.start()
			}, MAX_TIMEOUT)
		}
	}

	stop() {
		clearTimeout(this.timeoutInstance)
	}
}

const stopTimer = timerInstance => timerInstance.stop()

exports.setLongerTimeout = (callback, timeout) => new Timeout(callback, timeout)
exports.clearLongerTimeout = stopTimer

exports.setLongerInterval = (callback, interval) => new Interval(callback, interval)
exports.clearLongerInterval = stopTimer
