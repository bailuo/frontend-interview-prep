#### Iterator

1. 集合类数据结构都有默认迭代器
2. 可以利用Symbol.iterator自定义迭代器

#### Generator

#### Promise

1. Promise 有三种状态。初始化的时候状态为 Pending, , 成功时为 resolved， 失败时为 rejected。 当调用了 onResolved, 或者 onRejected, 获得结果

```js
// resolved
const promise1 = new Promise((onResolved, onRejected) => onResolved());
// rejexted
const promise2 = new Promise((onResolved, onRejected) => onRejected());
```

2. Promise.prototype.then 返回的是一个新的 Promise，起状态取决于Promise本身的处理。比如如果是一个已经resolved的Promise，那么这个状态就是resolved，相应的，如果执行过Promise.reject，那么状态就是rejected。

Promise.prototype.then接收两个参数，分别为resolve和reject的回调

```js
const p = Promise.reject('foo');
const p1 = p.then(null, () => {
    throw 'err';
}); // Uncaught promise 'err'
const p2 = p.then(null, () => Error('err')); // resolved Error err
```

3. Promise.resolve 静态方法可以将一个pending状态的Promise转换成落定状态, 相对应的Promsie.reject也是同样

4. Promise 的 catch 实际上是一个语法糖

```js
const p = Promise.reject();
function onRejected () {
    console.log('rejected');
}
// 两者等同
p.then(null, onRejected); // rejected
p.catch(onRejected) // rejected
```

5. Promise 的 finally 与状态无关
   4.1 不论前面是 resolved， 还是 rejected，finally 都会执行。同时finally中无法知道并且不关心当前的promise是已解决还是已被拒绝。
   4.2 通常用于清理在过程中产生的变量重置或者清理, 也用于处理在then, catch中都会出现的冗余代码
   4.3 finally 返回的结果也是一个 promise
   4.4 finally 不论前面情况如何都会把 finally 之前的状态向后面传递
