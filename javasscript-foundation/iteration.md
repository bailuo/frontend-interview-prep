#### Iterator

Symbol.iterator

#### Generator

#### Promise

1. Promise 有三种状态。初始化的时候状态为 Pending, , 成功时为 resolved， 失败时为 rejected。 当调用了 onResolved, 或者 onRejected, 获得结果

```js
// resolved
const promise1 = new Promise((onResolved, onRejected) => onResolved());
// rejexted
const promise2 = new Promise((onResolved, onRejected) => onRejected());
```

2. Promise.then 返回的是一个新的 Promise，其状态是 resolved，是第二个参数其实也是 resolved，只不过在第二个参数的地方，调用 onRejcted

```js
const p = Promise.reject('foo');
const p1 = p.then(null, () => {
    throw 'err';
}); // Uncaught promise 'err'
const p2 = p.then(null, () => Error('err')); // resolved Error err
```

3. Promise 的 catch 实际上是一个语法糖，相当于 Promise.resolve(null, onRejcted);
4. Promise 的 finally 与状态无关
   4.1 不论前面是 resolved， 还是 rejected，finally 都会执行
   4.2 finally 接收任何参数, 通常用于清理在过程中产生的变量重置或者清理
   4.3 finally 返回的结果也是一个 promise
   4.4 finally 不论前面情况如何都会把 finally 之前的状态向后面传递
