# pebounce
> *debounce* used to ignore most of my requests, so I found something more promising.

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

### pebounce(fn, wait, [ immediate || false ])

  Creates and returns a new debounced version of the passed function that
  will postpone its execution until after wait milliseconds have elapsed
  since the last time it was invoked.

#### fn
Type: `Function`
Promise-returning/async function to debounce.

#### wait
Type: `number`
Milliseconds to wait before calling `fn`.

#### immediate
Type: `object`

  Pass `true` for the `immediate` parameter to cause debounce to trigger
  the function on the leading edge instead of the trailing edge of the wait
  interval. Useful in circumstances like preventing accidental double-clicks
  on a "submit" button from firing a second time.

  The pebounced function returned has a property 'clear' that is a 
  function that will clear any scheduled future executions of your function.

  The pebounced function returned has a property 'flush' that is a 
  function that will immediately execute the function if and only if execution is scheduled,
  and reset the execution timer for subsequent invocations of the debounced
  function.

## Reference
 * [Debounce](https://css-tricks.com/debouncing-throttling-explained-examples/) promise-returning & async functions

## License

  MIT

  Original implementation is from [`underscore.js`](http://underscorejs.org/)
  which also has an MIT license.
 


