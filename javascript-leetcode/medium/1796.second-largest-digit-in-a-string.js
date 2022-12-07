/*
 * @lc app=leetcode id=1796 lang=javascript
 *
 * [1796] Second Largest Digit in a String
 */

// @lc code=start

const brutalForce = (s) => {
    const chars = s.split('');
    const nums = chars.filter((_c) => /[0-9]/.test(_c)).sort((a, b) => Number(b) - Number(a));
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return -1;
        }
        if (nums[i] !== nums[i + 1]) {
            return nums[i + 1];
        }
    }
    return -1;
};

const linear = (s) => {
    let first = -1,
        second = -1;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if ('0' <= c && c <= '9') {
            const num = c.charCodeAt() - '0'.charCodeAt();
            if (num > first) {
                second = first;
                first = num;
            } else if (num < first && num > second) {
                second = num;
            }
        }
    }
    return second;
};
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    return linear(s);
};
// @lc code=end
