/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */
// 1157/1157 cases passed (96 ms)
// Your runtime beats 87.39 % of javascript submissions
// Your memory usage beats 63.59 % of javascript submissions (43.2 MB)
// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (!s || !numRows) {
        return '';
    }
    // when only one row, just return the string
    if (numRows === 1) {
        return s;
    }
    const rowsNum = Math.min(s.length, numRows) - 1;
    let isDown = true;
    let currentRow = 0;
    // build up arrays with empty strings
    const rows = [];
    for (let i = 0; i <= rowsNum; i++) {
        rows[i] = '';
    }
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        // when reach two ends, change direction
        if ((currentRow === 0 && i > 0) || currentRow === rowsNum) {
            isDown = !isDown;
        }
        // change row for next char
        currentRow = isDown ? currentRow + 1 : currentRow - 1;
    }
    return rows.join('');
};
// @lc code=end
