/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    return nums.sort().find((_el, index, arr) => {
        return _el !== arr[index + 1] && _el !== arr[index - 1];
    });
};
// @lc code=end

/* Accepted
61/61 cases passed (92 ms)
Your runtime beats 61.52 % of javascript submissions
Your memory usage beats 60.01 % of javascript submissions (41.7 MB) */
