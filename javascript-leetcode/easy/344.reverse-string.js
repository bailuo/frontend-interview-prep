/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/* Accepted
 * 477/477 cases passed (235 ms)
 * Your runtime beats 5.23 % of javascript submissions
 * Your memory usage beats 54.74 % of javascript submissions (46.1 MB)
 *  */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = Math.floor(s.length / 2) - 1;
    let right = s.length % 2 === 0 ? left + 1 : left + 2;
    while (left >= 0 && right <= s.length - 1) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left--;
        right++;
    }
    return s;
};
// @lc code=end
