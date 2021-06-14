# p-debounce

> [Debounce](https://css-tricks.com/debouncing-throttling-explained-examples/) promise-returning & async functions

## Install

```
$ npm install pebounce
```

## Usage

```js
import pebounce from 'pebounce';

const expensiveCall = async input => input;

const debouncedFn = pebounce(expensiveCall, 200);

for (const number of [1, 2, 3]) {
	console.log(await debouncedFn(number));
}
//=> 3
//=> 3
//=> 3
```

## API

### pebounce(fn, wait, options?)

Returns a function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.

#### fn

Type: `Function`

Promise-returning/async function to debounce.

#### wait

Type: `number`

Milliseconds to wait before calling `fn`.

#### options

Type: `object`

##### before

Type: `boolean`\
Default: `false`

Call the `fn` on the [leading edge of the timeout](https://css-tricks.com/debouncing-throttling-explained-examples/#article-header-id-1). Meaning immediately, instead of waiting for `wait` milliseconds.

