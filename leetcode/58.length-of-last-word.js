/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s.trim().lenght === 0) {
        return 0;
    }
    const splits = s.trim().split(' ');
    return splits[splits.length - 1].length;
};
// @lc code=end

/* 
Accepted
58/58 cases passed (80 ms)
Your runtime beats 44.43 % of javascript submissions
Your memory usage beats 53.95 % of javascript submissions (38.6 MB) */
