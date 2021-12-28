/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
// Accepted
// 68/68 cases passed (72 ms)
// Your runtime beats 72.02 % of javascript submissions
// Your memory usage beats 34.4 % of javascript submissions (38.8 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dynamic programming
var rob = function (nums) {
    let previous = 0;
    let current = 0;
    let temp = 0;
    for (let index in nums) {
        temp = current;
        current = Math.max(current, nums[index] + previous);
        previous = temp;
    }
    return Math.max(current, previous);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rob;
// @after-stub-for-debug-end
