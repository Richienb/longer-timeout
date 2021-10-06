import {expectType} from 'tsd';
import {setLongerTimeout, clearLongerTimeout, setLongerInterval, clearLongerInterval} from './index.js';

/* eslint-disable @typescript-eslint/no-empty-function */
expectType<BigInt>(setLongerTimeout(() => {}, 1000));
expectType<BigInt>(setLongerTimeout(() => {}, 1000n));

clearLongerTimeout(setLongerTimeout(() => {}, 1000));
clearLongerTimeout(setLongerTimeout(() => {}, 1000n));

expectType<BigInt>(setLongerInterval(() => {}, 1000));
expectType<BigInt>(setLongerInterval(() => {}, 1000n));

clearLongerInterval(setLongerInterval(() => {}, 1000));
clearLongerInterval(setLongerInterval(() => {}, 1000n));
/* eslint-enable @typescript-eslint/no-empty-function */
