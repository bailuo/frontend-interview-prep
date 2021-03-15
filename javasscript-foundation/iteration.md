#### Iterator

Symbol.iterator

#### Generator

#### Promise

1. Promise 有三种状态。初始化的时候状态为 Pending, 当调用了onResolved, 或者onRejected, 获得结果

```js
// resolved
const promise1 = new Promise((onResolved, onRejected) => onResolved()); 
// rejexted
const promise2 = new Promise((onResolved, onRejected) => onRejected());
```

2. Promise.then 返回的是一个新的Promise，其状态是resolved，是第二个参数其实也是resolved，只不过在第二个参数的地方，调用onRejcted

```js
const p = Promise.reject('foo')
const p1 = p.then(null, () => {throw 'err'}) // Uncaught promise 'err'
const p2 = p.then(null, () => Error('err')) // resolved Error err
```

3. Promise的catch 实际上是一个语法糖，相当于Promise.resolve(null, onRejcted);
4. Promise的finally与状态无关, finally不论前面情况如何都会把finally之前的状态向后面传递
