/*
 * @lc app=leetcode id=791 lang=javascript
 *
 * [791] Custom Sort String
 */

// @lc code=start
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const map = new Map();
    // assign
    for (let i = order.length - 1; i >= 0; i--) {
        const char = order.charAt(i);
        map.set(char, order.length - i);
    }
    return s
        .split('')
        .sort((a, b) => {
            if (!map.has(b)) {
                return -1;
            }
            if (!map.has(a)) {
                return 1;
            }
            return map.get(b) - map.get(a);
        })
        .join('');
};
// @lc code=end
