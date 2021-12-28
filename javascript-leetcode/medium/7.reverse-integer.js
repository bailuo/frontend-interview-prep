/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/* 1032/1032 cases passed (104 ms)
Your runtime beats 44.19 % of javascript submissions
Your memory usage beats 53.81 % of javascript submissions (40.3 MB) */
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const multi = x >= 0 ? 1 : -1;
    if (x === 0) {
        return 0;
    }
    x = x < 0 ? -x : x;
    // elimiate all trailing zeros
    while (x % 10 === 0) {
        x = x / 10;
    }
    x = (x + '').split('').reverse().join('');
    return x <= 2147483648 ? multi * Number(x) : 0;
};
// @lc code=end
