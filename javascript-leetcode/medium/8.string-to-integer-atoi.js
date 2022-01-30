/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const rule = /[0-9-+]/;
    const strickRule = /^(\+|\-)?[0-9]+$/;
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && str.length === 0) {
            continue;
        }
        if (i === 0 && !rule.test(s[i])) {
            return 0;
        }
        if (str === '' && s[i].match(/\+|\-/) !== null) {
            str += s[i];
            continue;
        }
        if (!strickRule.test(str + s[i])) {
            break;
        }
        str += s[i];
    }
    if (!strickRule.test(str)) {
        return 0;
    }
    if (Number(str) < 2147483648 && Number(str) > -2147483648) {
        return Number(str);
    }
    return Number(str) < 2147483648 && Number(str) > -2147483648 ? Number(str) : str[0] === '-' ? -2147483648 : 2147483647;
};
// @lc code=end
/* Accepted
 * 1082/1082 cases passed (145 ms)
 * Your runtime beats 29.71 % of javascript submissions
 * Your memory usage beats 5.1 % of javascript submissions (45.6 MB)
 * */
