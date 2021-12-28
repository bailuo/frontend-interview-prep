/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    return getRowTwo(rowIndex);
};
// Accepted
// 34/34 cases passed (76 ms)
// Your runtime beats 58.13 % of javascript submissions
// Your memory usage beats 54.84 % of javascript submissions (38.8 MB)
function getRowOne(rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    // update the row on every loop
    for (let i = 1; i <= rowIndex; i++) {
        // update every column of the row
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
}
// Accepted
// 34/34 cases passed (76 ms)
// Your runtime beats 58.13 % of javascript submissions
// Your memory usage beats 67.21 % of javascript submissions (38.7 MB)
function getRowTwo(rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; ++i) {
        row[i] = (row[i - 1] * (rowIndex - i + 1)) / i;
    }
    return row;
}
// @lc code=end
