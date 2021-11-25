/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  Accepted
//  209/209 cases passed (92 ms)
//  Your runtime beats 82.26 % of javascript submissions
//  Your memory usage beats 36.61 % of javascript submissions (48.9 MB)
var maxSubArray = function (nums) {
    // no element condition
    if (nums.length === 0) {
        return 0;
    }
    // general situation
    let max = nums[0];
    let curr = max;
    // from left to right, we go through the array
    for (let i = 1; i < nums.length; i++) {
        // if the result is less than before when we add the nums[i], we still keep the former result as curr
        curr = Math.max(nums[i], nums[i] + curr);
        // this line is easy to understand, we always keep the max result
        max = Math.max(max, curr);
    }
    return max;
};
// @lc code=end
