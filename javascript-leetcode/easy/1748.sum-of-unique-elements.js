/*
 * @lc app=leetcode id=1748 lang=javascript
 *
 * [1748] Sum of Unique Elements
 */
/*
 * Accepted
 * 73/73 cases passed (68 ms)
 * Your runtime beats 91.44 % of javascript submissions
 * Your memory usage beats 14.17 % of javascript submissions (42.1 MB)
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const map = new Map();
    let sum = 0;
    if (!nums.length) {
        return 0;
    }
    nums.forEach((_num) => {
        if (!map.has(_num)) {
            map.set(_num, 1);
            return;
        }
        map.set(_num, map.get(_num) + 1);
    });
    map.forEach((val, key) => {
        if (val !== 1) {
            return;
        }
        sum += key;
    });
    return sum;
};
// @lc code=end
