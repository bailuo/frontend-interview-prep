/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Accepted
// 46/46 cases passed (76 ms)
// Your runtime beats 92.58 % of javascript submissions
// Your memory usage beats 9.15 % of javascript submissions (42.8 MB)
var search = function (nums, target) {
    const mid = Math.floor(nums.length / 2);
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length <= 2) {
        return nums.indexOf(target);
    }
    return BinarySearch(nums, target, 0);
};

function BinarySearch(nums, target, baseIndex) {
    // 当长度为1还找不到的时候，那么就是 -1
    if (nums.length === 1) {
        console.log(nums[0]);
        return nums[0] === target ? baseIndex : -1;
    }
    // 当长度为2的时候
    const mid = Math.floor(nums.length / 2);
    let partial = [];
    if (nums[mid] <= target) {
        baseIndex = baseIndex + mid;
        partial = nums.slice(mid);
    } else {
        partial = nums.slice(0, mid);
    }
    return BinarySearch(partial, target, baseIndex);
}

// @lc code=end
