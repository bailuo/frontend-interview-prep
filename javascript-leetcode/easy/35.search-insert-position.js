/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/* Accepted
 * 64/64 cases passed (136 ms)
 * Your runtime beats 5.16 % of javascript submissions
 * Your memory usage beats 95.43 % of javascript submissions (38.6 MB)* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let end = nums.length - 1;
    let start = 0;
    if (target > nums[end]) {
        return end + 1;
    }
    if (target < nums[start]) {
        return 0;
    }
    while (end - start >= 2) {
        const mid = Math.ceil((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            start = mid;
        }
        if (nums[mid] > target) {
            end = mid;
        }
    }
    return nums[start] === target ? start : end;
};
// @lc code=end
