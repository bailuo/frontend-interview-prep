/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
//  Accepted
//  111/111 cases passed (80 ms)
//  Your runtime beats 32.97 % of javascript submissions
//  Your memory usage beats 94.22 % of javascript submissions (38.3 MB)
var plusOne = function (digits) {
    let current = digits.length - 1;
    let shouldAddOne = true;
    while (current >= 0) {
        const toAdd = shouldAddOne ? 1 : 0;
        const beforeAdd = digits[current] || 0;
        const added = beforeAdd + toAdd;
        if (added === 10) {
            digits[current] = 0;
            shouldAddOne = true;
        } else {
            digits[current] = added;
            shouldAddOne = false;
        }
        current--;
    }
    if (shouldAddOne) {
        digits.unshift(1);
    }
    return digits;
};
// @lc code=end
