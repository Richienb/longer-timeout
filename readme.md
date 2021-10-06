# longer-timeout

Create timeouts longer than supported by `setTimeout` or `setInterval`.

## Install

```sh
npm install longer-timeout
```

## Usage

```js
import {setLongerTimeout, clearLongerTimeout, setLongerInterval, clearLongerInterval} from 'longer-timeout';

const timer = setLongerTimeout(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerTimeout(timer);

const interval = setLongerInterval(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerInterval(interval);
```

## API

### setLongerTimeout(callback, timeout)

Execute `callback` after `milliseconds` have passed. Returns the timeout id. To stop the timeout, provide the id to `clearLongerTimeout`.

#### callback

The callback to execute.

#### timeout

Type: `number | BigInt`

The number of milliseconds to wait.

```js
import {setLongerTimeout} from 'longer-timeout';

setLongerTimeout(() => {
	console.log('10 seconds have passed.');
}, 10000);
```

### clearLongerTimeout(id)

Stop a timeout started by `startLongerTimeout`.

#### id

Type: `BigInt`

The id of the timeout to stop. This is returned when `setLongerTimeout` is called.

```js
import {setLongerTimeout, clearLongerTimeout} from 'longer-timeout';

const timer = setLongerTimeout(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerTimeout(timer);
```

### setLongerInterval(callback, interval)

Execute `callback` every `milliseconds`.

#### callback

The callback to execute.

#### interval

Type: `number | BigInt`

The number of milliseconds to wait between each execution.

```js
import {setLongerInterval} from 'longer-timeout';

const timer = setLongerInterval(() => {
	console.log('10 seconds have passed.');
}, 10000);
```

### clearLongerInterval(id)

Stop an interval started by `startLongerInterval`.

#### id

Type: `BigInt`

The id of the interval to stop. This is returned when `setLongerInterval` is called.

```js
import {setLongerInterval, clearLongerInterval} from 'longer-timeout';

const timer = setLongerInterval(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerInterval(timer);
```
