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


## API

### debounce(fn, wait, [ immediate || false ])

  Creates and returns a new debounced version of the passed function that
  will postpone its execution until after wait milliseconds have elapsed
  since the last time it was invoked.

  Pass `true` for the `immediate` parameter to cause debounce to trigger
  the function on the leading edge instead of the trailing edge of the wait
  interval. Useful in circumstances like preventing accidental double-clicks
  on a "submit" button from firing a second time.

  The debounced function returned has a property 'clear' that is a 
  function that will clear any scheduled future executions of your function.

  The debounced function returned has a property 'flush' that is a 
  function that will immediately execute the function if and only if execution is scheduled,
  and reset the execution timer for subsequent invocations of the debounced
  function.

## License

  MIT

  Original implementation is from [`underscore.js`](http://underscorejs.org/)
  which also has an MIT license.

