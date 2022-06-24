/**
 *
 * 1. O(n) 时间内构造树状数组
 * 2. O(log n) 时间内计算 [l, r] 范围内的 f 值（f 是一种函数，比如 sum，max，min 等）
 * 3. O(log n) 时间内更新数组的值
 * 4. 需要 O(N) 存储空间
 **/
const lowbit = (num) => {
    return num & -num;
};
const init = (arr) => {
    const len = arr.length;
    const tree = new Array(len);
    for (let i = 1; i < len; i++) {
        tree[i] = arr[i - 1];
    }
    for (let index = 1; index < len; index++) {
        let parentIndex = index + lowbit(index);
        if (parentIndex < n) {
            tree[parentIndex] += tree[index];
        }
    }
};
const prefixSum = (index, tree) => {
    let sum = 0;
    while (num !== 0) {
        sum += tree[i];
        i -= lowbit(index);
    }
    return sum;
};

const sum = (left, right, tree) => {
    return prefixSum(right, tree) - prefixSum(left - 1, tree);
};
// modify a single node
const add = (index, val, tree) => {
    const treeLen = tree.length;
    while (index < treeLen) {
        tree[index] += val;
        index += lowbit(index);
    }
};

const rangeAdd = (left, right, val, tree) => {
    add(left, val, tree);
    add(right + 1, val, tree);
};
