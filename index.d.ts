/// <reference lib="es2020"/>

type Opaque<Type, Token = unknown> = Type & { readonly __opaque__: Token }

declare namespace longerTimeout {
	export type TimerObject = Opaque<object, "Timer">
}

declare const longerTimeout: {
	/**
	Execute the `callback` after `timeout` milliseconds has passed.
	@param callback The callback to execute.
	@param timeout The amount of milliseconds to wait.
	@example
	```
	const { setLongerTimeout } = require("longer-timeout");

	setLongerTimeout(() => {
		console.log("10 seconds have passed.");
	}, 10000);
	```
	*/
	setLongerTimeout(callback: () => Record<string, unknown>, timeout: number | BigInt): longerTimeout.TimerObject

	/**
	Cancel the timer started by `setLongerTimeout`.
	@param timerObject The timer object to stop.
	@example
	```
	const { setLongerTimeout, clearLongerTimeout } = require("longer-timeout");

	const timer = setLongerTimeout(() => {
		console.log("10 seconds have passed.");
	}, 10000);

	clearLongerTimeout(timer);
	```
	*/
	clearLongerTimeout(timerObject: longerTimeout.TimerObject): void

	/**
	Execute the `callback` every `interval` milliseconds.
	@param callback The callback to execute.
	@param interval The amount of milliseconds between invocations.
	@example
	```
	const { setLongerInterval } = require("longer-timeout");

	const timer = setLongerInterval(() => {
		console.log("10 seconds have passed.");
	}, 10000);
	```
	*/
	setLongerInterval(callback: () => Record<string, unknown>, interval: number | BigInt): longerTimeout.TimerObject

	/**
	Cancel the timer started by `setLongerInterval`.
	@param timerObject The timer object to stop.
	@example
	```
	const { setLongerInterval, clearLongerInterval } = require("longer-timeout");

	const timer = setLongerInterval(() => {
		console.log("10 seconds have passed.");
	}, 10000);

	clearLongerInterval(timer);
	```
	*/
	clearLongerInterval(timerObject: longerTimeout.TimerObject): void
}

export = longerTimeout
