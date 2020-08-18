# longer-timeout [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/longer-timeout/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/longer-timeout)

Create timeouts longer than supported by `setTimeout` or `setInterval`.

[![NPM Badge](https://nodei.co/npm/longer-timeout.png)](https://npmjs.com/package/longer-timeout)

## Install

```sh
npm install longer-timeout
```

## Usage

```js
const { setLongerTimeout, clearLongerTimeout, setLongerInterval, clearLongerInterval } = require("longer-timeout")

const timer = setLongerTimeout(() => {
	console.log("10 seconds have passed.");
}, 10000);

clearLongerTimeout(timer);

const interval = setLongerInterval(() => {
	console.log("10 seconds have passed.");
}, 10000);

clearLongerInterval(interval);
```

## API

### longerTimeout.setLongerTimeout(callback, timeout)

Execute the `callback` after `timeout` milliseconds has passed.

#### callback

Type: `() => {}`

The callback to execute.

#### timeout

Type: `number | BigInt`

The amount of milliseconds to wait.

```js
const { setLongerTimeout } = require("longer-timeout");

setLongerTimeout(() => {
	console.log("10 seconds have passed.");
}, 10000);
```

### longerTimeout.clearLongerTimeout(timerObject)

Cancel the timer started by `setLongerTimeout`.

#### timerObject

Type: Return value of `longerTimeout.setLongerTimeout`

The timer object to stop.

```js
const { setLongerTimeout, clearLongerTimeout } = require("longer-timeout");

const timer = setLongerTimeout(() => {
	console.log("10 seconds have passed.");
}, 10000);

clearLongerTimeout(timer);
```

### longerTimeout.setLongerInterval(callback, interval)

Execute the `callback` every `interval` milliseconds.

#### callback

Type: `() => {}`

The callback to execute.

#### interval

Type: `number | BigInt`

The amount of milliseconds between invocations.

```js
const { setLongerInterval } = require("longer-timeout");

const timer = setLongerInterval(() => {
	console.log("10 seconds have passed.");
}, 10000);
```

### longerTimeout.clearLongerInterval(timerObject)

Cancel the timer started by `setLongerInterval`.

#### timerObject

Type: Return value of `longerTimeout.setLongerInterva;`

The timer object to stop.

```js
const { setLongerInterval, clearLongerInterval } = require("longer-timeout");

const timer = setLongerInterval(() => {
	console.log("10 seconds have passed.");
}, 10000);

clearLongerInterval(timer);
```
