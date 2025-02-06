In this question, the candidate needs to implement a function  `customIsArray`  that mimics the behaviour of  `Array.isArray`  method.

More about  `Array.isArray`

The  `Array.isArray()`  static method determines whether the passed value is an Array.

## [](#Introduction)Introduction
The Array.isArray method in JavaScript determines whether a given value is an array. Your task is to implement a custom version of Array.isArray that behaves exactly like the native method.

## [](#Introduction)Function Signature


```js
function customIsArray(value) {
  // Your implementation here
}
```

## [](parameters)Parameters

- `value` (any type): The input to check if it is an array.

## [](#Introduction)Return Value
 - Returns `true` if `value` is an array.
 - Returns `false` for all other types.


## [](#Introduction)Examples

### []() ✅ Valid Arrays (Should Return true)

```js
customIsArray([]);                     // true (empty array)
customIsArray([1, 2, 3]);              // true (array with elements)
customIsArray(new Array());            // true (array created via constructor)
customIsArray(Array.prototype);        // true (Array's prototype is an array)
customIsArray(new Array(5));           // true (sparse array)

```

### []() ❌ Non-Array Values (Should Return false)
```js
customIsArray({});                     // false (plain object)
customIsArray("hello");                // false (string)
customIsArray(123);                     // false (number)
customIsArray(null);                    // false (null)
customIsArray(undefined);               // false (undefined)
customIsArray(() => []);                // false (function returning array)
customIsArray(new Set([1, 2, 3]));      // false (Set is not an array)
customIsArray(document.querySelectorAll('div')); // false (NodeList, not an array)
```


## []() Constraints
1. Do not use the built-in Array.isArray method.
2. Your implementation should work for all JavaScript environments (browsers, Node.js).
3. The function should handle edge cases like null, undefined, and prototype checks.

## []() Bonus (Optional Enhancements)
1. Can you implement this function without using Object.prototype.toString?
2. Can you compare performance differences between your solution and the native Array.isArray?

