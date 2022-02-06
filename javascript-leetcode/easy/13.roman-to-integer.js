/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/*
 * Accepted
 * 3999/3999 cases passed (229 ms)
 * Your runtime beats 41.67 % of javascript submissions
 * Your memory usage beats 12.19 % of javascript submissions (48.2 MB)
 * */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const joint = s[i + 1] ? curr + s[i + 1] : '';
        if (map[joint]) {
            result += map[joint];
            i++;
            continue;
        }
        result += map[curr];
    }
    return result;
};
// @lc code=end
