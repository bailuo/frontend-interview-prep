/*
 * @lc app=leetcode id=1822 lang=javascript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    nums.sort((a, b) => a - b);
    let negativeCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return 0;
        if (nums[i] > 0) return negativeCount % 2 ? -1 : 1;
        negativeCount++;
    }
    return negativeCount % 2 ? -1 : 1;
};
// @lc code=end

// Accepted
// 76/76 cases passed (131 ms)
// Your runtime beats 5.19 % of javascript submissions
// Your memory usage beats 33.51 % of javascript submissions (43.9 MB)
