/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    const childrenLength = g.length;
    const cookieLength = s.length;
    let count = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    for (let i = 0, j = 0; i < childrenLength && j < cookieLength; i++, j++) {
        while (g[i] > s[j]) {
            j++;
        }
        if (j < cookieLength) count++;
    }
    return count;
};
// @lc code=end
