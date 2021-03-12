#### Map

1. 给 Javascript 带来真正的[key, value]存储机制
2. 使用 new 关键字创建实例，可传入自定义的迭代器

```js
const mp = new Map({
    [Symbol.iterator]: function* () {
        yield ['key1', 'value1'];
        yield ['key2', 'value2'];
        yield ['key3', 'value3'];
    },
});

console.log(mp.size); // 3
```

3. Map 获取值时用 get, 设置值时为 set
4. Map 的 key 可以是任何类型,甚至是 Object，而 Object 只能是字符串/数字/符号
5. Map 维护顺序，而 Object 是无序的
6. Object 在查询速度上快于 Map，但是 Map 在存储，删除，插入上都更优秀,尤其在存储上 Map 能比 Object 上多存储 50%

#### WeakMap

1. key 是 weak 的，但是 value 不是
2. WeakMap 的 key 只能是 Object 或者继承 Object 的类型,如果不使用 Object 会报 TypeError
3. WeakMap 不存在 iterator
4. WeakMap 适合实现私有变量

```js
const wp = new WeakMap();

class User {
    constructor(id) {
        this.idProperty = Symbol('id');
        this.setId(id);
    }

    setId(id) {
        this.setPrivate(this.idProperty, id);
    }

    setPrivate(prop, value) {
        // this即这个class，class消失则weakmap中this的引用消失，用这个方法私有变量
        const privateMembers = wp.get(this) || {};
        privateMembers[prop] = value;
        return wp.set(this, privateMembers);
    }

    getId() {
        return this.getPrivate(this.idProperty);
    }

    getPrivate(prop) {
        const privateMembers = wp.get(this)[prop];
    }
}
```

5. WeakMap 适合存储 DOM 节点原数据，使用 DOM 节点做 key，在 DOM 节点销毁后，引用自然消失，垃圾回收

#### Set

1. 加强版的 Map
2. 使用 add 增加元素，使用 delete 和 clear 删除元素
3. add 返回集合的实例，delete 返回集合中是否还存在这个元素

#### WeakSet

和 WeakMap 一样，WeakSet 的 key 在没有引用时会消失，而且只能使用 Object 或者 Object 的继承实现
