const test = require("ava")
const timeSpan = require("time-span")
const inRange = require("in-range")
const { setLongerTimeout, setLongerInterval, clearLongerInterval } = require(".")

test(".setLongerTimeout()", async t => {
	const end = timeSpan()
	await new Promise(resolve => setLongerTimeout(resolve, 1000))
	t.true(inRange(end(), { start: 980, end: 1200 }))
})

test(".setLongerInterval()", async t => {
	const end = timeSpan()
	await new Promise(resolve => {
		const timer = setLongerInterval(() => {
			clearLongerInterval(timer)
			resolve()
		}, 1000)
	})
	t.true(inRange(end(), { start: 980, end: 1200 }))
})
