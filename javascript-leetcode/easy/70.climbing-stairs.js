/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
 * Accepted
 * 45/45 cases passed (69 ms)
 * Your runtime beats 78.59 % of javascript submissions
 * Your memory usage beats 24.51 % of javascript submissions (41.3 MB)
 *  */
// very basic practice of dynamic programming
var climbStairs = function (n) {
    if (n < 3) {
        return n;
    }
    const map = new Map();
    map.set(1, 1);
    map.set(2, 2);
    return climbHelper(n, map);
};

function climbHelper(n, map) {
    if (n < 3) {
        return n;
    }
    if (map.has(n)) {
        return map.get(n);
    }
    const far = climbHelper(n - 2, map);
    map.set(n - 2, far);
    const near = climbHelper(n - 1, map);
    map.set(n - 1, near);
    return near + far;
}
// @lc code=end
