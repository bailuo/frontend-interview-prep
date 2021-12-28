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
/* Accepted
45/45 cases passed (76 ms)
Your runtime beats 73.73 % of javascript submissions
Your memory usage beats 26.45 % of javascript submissions (38.6 MB) */

// very basic practice of dynamic programming
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }
    const map = {};
    return climb(n, map);
};

function climb(count, map) {
    if (count <= 2) {
        return count;
    }
    if (map[count]) {
        return map[count];
    }
    map[count - 1] = map[count - 1] || climb(count - 1, map);
    map[count - 2] = map[count - 2] || climb(count - 2, map);
    return map[count - 1] + map[count - 2];
}
// @lc code=end
