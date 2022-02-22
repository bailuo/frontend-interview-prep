/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum = num;
    if (num < 10) {
        return num;
    }
    while (sum >= 10) {
        const arr = sum.toString().split('');
        sum = arr.reduce((accu, curr) => {
            return accu + Number(curr);
        }, 0);
    }
    return sum;
};
// @lc code=end

/*
 * Accepted
 * 1101/1101 cases passed (110 ms)
 * Your runtime beats 42.87 % of javascript submissions
 * Your memory usage beats 40.23 % of javascript submissions (43.9 MB)
 * */
