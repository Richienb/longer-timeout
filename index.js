const TIMEOUT_LIMIT = 2_147_483_647n;
let ids = 0n;

const timeoutMap = new Map();

export function setLongerTimeout(callback, milliseconds) {
	const longerTimeoutId = ++ids;
	const timeoutId = milliseconds <= TIMEOUT_LIMIT
		? setTimeout(() => {
			timeoutMap.delete(longerTimeoutId);
			callback();
		}, Number(milliseconds))
		: setTimeout(() => {
			milliseconds -= TIMEOUT_LIMIT;
			setLongerTimeout(callback, milliseconds);
		}, Number(TIMEOUT_LIMIT));

	timeoutMap.set(longerTimeoutId, timeoutId);
	return longerTimeoutId;
}

export function clearLongerTimeout(id) {
	clearTimeout(timeoutMap.get(id));
	timeoutMap.delete(id);
}

export function setLongerInterval(callback, milliseconds) {
	const longerIntervalId = ++ids;

	const longerTimeoutId = setLongerTimeout(() => {
		timeoutMap.set(longerIntervalId, setLongerInterval(callback, milliseconds));
		callback();
	}, milliseconds);

	timeoutMap.set(longerIntervalId, longerTimeoutId);
	return longerIntervalId;
}

export function clearLongerInterval(id) {
	clearLongerTimeout(timeoutMap.get(id));
	timeoutMap.delete(id);
}
