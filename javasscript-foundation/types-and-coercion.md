### Primitive Types

```js
undefined
string
number
boolean
object
symbol
null
bigint(in the near future)
```

**--undeclared:** has a behavior, but it is not a type.
**--function:** is a subtype of object
**--array:** subtype of object, a special kind of object

In Javascript, variables do not have types, values do

### typeof

```js
var v; tyoeof v; // "undefined"
v = "1"; typeof v; // "string"
v =2; typeof v; // "number"
v= Symbol(); typeof v; // "symbol"
v = null; typeof v; // "object" --- js bug
v =function () {}; typeof v; // "function"
v = [1,2,3]; typeof v; // "object
```

### undefined v.s. undeclared v.s. uninitialized(TDZ)"

undeclared means the variable does not exist, but in JS, when we use typeof it returns "undefined"

### NaN & isNaN

In Javascript, the minor sign(-) is always associated with numbers, if you try to use a non-number value with it, the minors operation trys to convert it to a number

```js
NaN  === NaN // false
isNaN('my age') // true
```

The logic behind the ```isNaN``` utility is that it coerce the value to a number before it determines if the value is actually a number, but in ES6, the ```Number.isNaN``` behaves differently

```js
Number.isNaN('my age') // false
```

when you try this below

```js
typeof NaN; // number
```

because NaN is a number, just an invalid number

### Negative Zero
