/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*  Accepted
 * 106/106 cases passed (139 ms)
 * Your runtime beats 42.05 % of javascript submissions
 * Your memory usage beats 94.06 % of javascript submissions (40.6 MB) */
var jump = function (nums) {
    let left = 0;
    let right = 0;
    let jumpCount = 0;
    const length = nums.length;
    if (length === 1) {
        return 0;
    }
    while (right < length - 1) {
        let farest = 0;
        for (let i = left; i <= right; i++) {
            farest = Math.max(farest, nums[i] + i);
        }
        left = right + 1;
        right = farest;
        jumpCount += 1;
    }
    return jumpCount;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = jump;
// @after-stub-for-debug-end
