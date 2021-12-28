/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// Accepted
// 14/14 cases passed (72 ms)
// Your runtime beats 74 % of javascript submissions
// Your memory usage beats 14.78 % of javascript submissions (38.9 MB)
var generate = function (numRows) {
    if (!numRows) {
        return [];
    }
    // do we have a corner case?
    if (numRows === 1) {
        return [[1]];
    }
    const rows = [[1]];
    for (let i = 1; i < numRows; i++) {
        const row = [];
        row[0] = 1; // first element in the row
        row[i] = 1; // last element in the row
        // other elments in the row
        for (let j = 1; j < i; j++) {
            const lastLeft = rows[i - 1][j - 1];
            // for row2(i ===1), the element on the right side does not exist
            const lastRight = rows[i - 1][j] || 0;
            row[j] = lastLeft + lastRight;
        }
        rows[i] = row;
    }
    return rows;
};
// @lc code=end
