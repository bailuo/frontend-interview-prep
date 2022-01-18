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
/* Accepted
 * 47/47 cases passed (80 ms)
 * Your runtime beats 68.69 % of javascript submissions
 * Your memory usage beats 10.61 % of javascript submissions (42.6 MB)
 * */
var search = function (nums, target) {
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
/* Accepted
 * 47/47 cases passed (80 ms)
 * Your runtime beats 68.69 % of javascript submissions
 * Your memory usage beats 34.22 % of javascript submissions (42.4 MB)
 */
// in place search, low space complicaty,
var searchOne = function (nums, target) {
    if (target > nums[nums.length - 1] || target < nums[0]) {
        return -1;
    }
    return searchHelp(nums, target, 0, nums.length - 1);
};

function searchHelp(nums, target, start, end) {
    // one or two elements
    if (end - start <= 1) {
        return target === nums[start] ? start : target === nums[end] ? end : -1;
    }
    // more than two
    const mid = Math.ceil((start + end) / 2);
    const midNum = nums[mid];
    return midNum === target ? mid : target > midNum ? searchHelp(nums, target, mid, end) : searchHelp(nums, target, start, mid);
}
// @lc code=end
