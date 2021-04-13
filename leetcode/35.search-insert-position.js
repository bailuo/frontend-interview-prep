/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
// 62/62 cases passed (76 ms)
// Your runtime beats 79.94 % of javascript submissions
// Your memory usage beats 73.54 % of javascript submissions (38.7 MB)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let position = 0;
    while (nums[position] < target) {
        position++;
    }
    return position;
};
// @lc code=end
