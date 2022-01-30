/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let isDown = false;
    let curentRow = 0;
    const rows = [];
    if (!s || !numRows) {
        return '';
    }
    if (numRows === 1) {
        return s;
    }
    for (let i = 0; i < numRows; i++) {
        rows.push('');
    }
    for (let i = 0; i < s.length; i++) {
        rows[curentRow] += s[i];
        if (curentRow === numRows - 1 || curentRow === 0) {
            isDown = !isDown;
        }
        curentRow = isDown ? curentRow + 1 : curentRow - 1;
    }
    return rows.join('');
};
// @lc code=end
/* Accepted
 * 1157/1157 cases passed (164 ms)
 * Your runtime beats 36.46 % of javascript submissions
 * Your memory usage beats 21.27 % of javascript submissions (46.4 MB)
 * */
