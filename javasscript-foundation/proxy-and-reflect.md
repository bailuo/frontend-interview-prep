#### Proxy

1. proxy 可以使用Proxy的构造器生成新的实例

```js
const proxy = new Proxy(target, handler);
```

在handler上我们可以定义任何自己需要的拦截函数，例如

```js
// TODO 
```

#### Reflect

```js
// 没有reflect之前
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 有了reflect之后的新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

##### Reflect 和 Proxy

1. Proxy 和 Reflect都是ES6 提供的操作Object的新方法
2. Proxy上的方法不论如何修改都可以在Reflect上找到对应的方法

```js
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target,name, value, receiver);
    if (success) {
      log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
```
