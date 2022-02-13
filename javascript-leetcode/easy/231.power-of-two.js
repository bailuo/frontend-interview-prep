/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/*
 * Accepted
 * 1108/1108 cases passed (68 ms)
 * Your runtime beats 99.09 % of javascript submissions
 * Your memory usage beats 16.06 % of javascript submissions (42.6 MB) */
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end
