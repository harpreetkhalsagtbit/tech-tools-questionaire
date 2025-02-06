
In this question, the candidate needs to implement a function  `customIsArray`  that mimics the behaviour of  `Array.isArray`  method.

More about  `Array.isArray`

The  `Array.isArray()`  static method determines whether the passed value is an Array.

## [](#syntax)Syntax

```js
customIsArray(value);

```

## [](#parameters)Parameters

1.  `value`

The value to be checked.

## [](#return-value)Return value

`true`  if value is an Array; otherwise,  `false`.

## [](#examples)Examples

```js
// all following calls return true
customIsArray([]);
customIsArray([1]);
customIsArray(new Array());
customIsArray(new Array("a", "b", "c", "d"));
customIsArray(new Array(3));
customIsArray(Array.prototype);

// all following calls return false
customIsArray();
customIsArray({});
customIsArray(null);
customIsArray(undefined);
customIsArray(17);
customIsArray("Array");
customIsArray(true);
customIsArray(false);
customIsArray(new Uint8Array(32));

```
