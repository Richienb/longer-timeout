import {setTimeout as delay} from 'node:timers/promises';
import test from 'ava';
import timeSpan from 'time-span';
import inRange from 'in-range';
import {setLongerTimeout, clearLongerTimeout, setLongerInterval, clearLongerInterval} from './index.js';

const toPromise = callback => new Promise(resolve => {
	callback(resolve);
});

test('.setLongerTimeout()', async t => {
	const end = timeSpan();
	await toPromise(callback => setLongerTimeout(callback, 1000));
	t.true(inRange(end(), {start: 980, end: 1200}));
});

test('.clearLongerTimeout()', async t => {
	let isCalled = false;
	const id = setLongerTimeout(() => {
		isCalled = true;
	}, 1000);
	clearLongerTimeout(id);
	await delay(1200);
	t.false(isCalled);
});

test('.setLongerInterval()', async t => {
	const end = timeSpan();
	let calls = 0;
	await toPromise(callback => {
		const timer = setLongerInterval(() => {
			calls++;
			if (calls === 3) {
				clearLongerInterval(timer);
				callback();
			}
		}, 1000);
	});
	t.true(inRange(end(), {start: 2980, end: 3200}));
});

test('.clearLongerInterval()', async t => {
	let isCalled = false;
	const id = setLongerInterval(() => {
		isCalled = true;
	}, 1000);
	clearLongerInterval(id);
	await delay(1200);
	t.false(isCalled);
});
