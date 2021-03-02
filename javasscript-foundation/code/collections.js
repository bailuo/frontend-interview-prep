const mp = new Map({
    [Symbol.iterator]: function* () {
        yield ['key1', 'value1'];
        yield ['key2', 'value2'];
        yield ['key3', 'value3'];
    },
});

console.log(mp.size); // 3

const wmp = new WeakMap();
wmp.set({}, 'value'); // 无对key的引用,执行完就回收
const container = {
    key: {},
};
wmp.set(container.key, 'value'); // 有引用，执行完不回收

// WeakMap 实现私有变量
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
