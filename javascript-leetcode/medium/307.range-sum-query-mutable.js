/*
 * @lc app=leetcode id=307 lang=javascript
 *
 * [307] Range Sum Query - Mutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    // build up the tree
    this.tree = new Array(nums.length + 1).fill(0);
    for (let idx = 0; idx < nums.length; idx++) {
        this.add(idx + 1, nums[idx]);
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum(right + 1) - this.prefixSum(left);
};

NumArray.prototype.lowbit = function (x) {
    return x & -x;
};
// add the value to each leval of the tree
NumArray.prototype.add = function (index, val) {
    while (index < this.tree.length) {
        this.tree[index] += val;
        index += this.lowbit(index);
    }
};

NumArray.prototype.prefixSum = function (index) {
    let sum = 0;
    while (index > 0) {
        sum += this.tree[index];
        index -= this.lowbit(index);
    }
    return sum;
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

/**
 * Accepted
 * 15/15 cases passed (925 ms)
 * Your runtime beats 27.64 % of javascript submissions
 * Your memory usage beats 33.33 % of javascript submissions (100.3 MB)
 */
