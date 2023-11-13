/*
 * @lc app=leetcode id=1812 lang=javascript
 *
 * [1812] Determine Color of a Chessboard Square
 */

// @lc code=start
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    const splited = coordinates.split('');
    const map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const letterIndex = map.indexOf(splited[0]);
    if (Number(splited[1] % 2 === 0) && (letterIndex + 1) % 2 === 0) return false;
    if (Number(splited[1] % 2 !== 0) && (letterIndex + 1) % 2 !== 0) return false;
    return true;
};
// @lc code=end

/* 
Accepted
64/64 cases passed (63 ms)
Your runtime beats 90.54 % of javascript submissions
Your memory usage beats 82.3 % of javascript submissions (41.7 MB) */
