/**
Execute `callback` after `milliseconds` have passed.

@param callback The callback to execute.
@param milliseconds The number of milliseconds to wait.

@returns The timeout id. To stop the timeout, provide the id to `clearLongerTimeout`.

@example
```
import {setLongerTimeout} from 'longer-timeout';

setLongerTimeout(() => {
	console.log('10 seconds have passed.');
}, 10000);
```
*/
export function setLongerTimeout(callback: () => unknown, milliseconds: number | BigInt): BigInt;

/**
Stop a timeout started by `startLongerTimeout`.

@param id The id of the timeout to stop. This is returned when `setLongerTimeout` is called.

@example
```
import {setLongerTimeout, clearLongerTimeout} from 'longer-timeout';

const timer = setLongerTimeout(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerTimeout(timer);
```
*/
export function clearLongerTimeout(id: BigInt): void;

/**
Execute `callback` every `milliseconds`.

@param callback The callback to execute.
@param milliseconds The number of milliseconds to wait between each execution.

@returns The interval id. To stop the interval, provide the id to `clearLongerInterval`.

@example
```
import {setLongerInterval} from 'longer-timeout';

const timer = setLongerInterval(() => {
	console.log('10 seconds have passed.');
}, 10000);
```
*/
export function setLongerInterval(callback: () => unknown, milliseconds: number | BigInt): BigInt;

/**
Stop an interval started by `startLongerInterval`.

@param id The id of the interval to stop. This is returned when `setLongerInterval` is called.

@example
```
import {setLongerInterval, clearLongerInterval} from 'longer-timeout';

const timer = setLongerInterval(() => {
	console.log('10 seconds have passed.');
}, 10000);

clearLongerInterval(timer);
```
*/
export function clearLongerInterval(id: BigInt): void;
