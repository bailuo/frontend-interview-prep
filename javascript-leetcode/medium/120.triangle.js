/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const map = new Map();
    const rowCount = triangle.length;
    let ans = Number.MAX_SAFE_INTEGER;
    if (!triangle) {
        return 0;
    }
    if (rowCount === 1) {
        return triangle[0][0];
    }
    for (let col = 0; col < triangle[rowCount - 1].length; col++) {
        ans = Math.min(ans, traversal(triangle, rowCount - 1, col, map));
    }
    return ans;
};

function traversal(triangle, row, col, map) {
    if (row === 0) {
        map.set(`0-0`, triangle[0][0]);
        return triangle[row][0];
    }
    if (map.has(`${row}-${col}`)) {
        return map.get(`${row}-${col}`);
    }
    let nextRowResult = 0;
    if (col === 0) {
        nextRowResult = traversal(triangle, row - 1, col, map);
        map.set(`${row - 1}-${col}`, nextRowResult);
    } else if (col === triangle[row].length - 1) {
        nextRowResult = traversal(triangle, row - 1, col - 1, map);
        map.set(`${row - 1}-${col - 1}`, nextRowResult);
    } else {
        const val1 = traversal(triangle, row - 1, col, map);
        const val2 = traversal(triangle, row - 1, col - 1, map);
        map.set(`${row - 1}- ${col}`, val1);
        map.set(`${row - 1}- ${col - 1}`, val2);
        nextRowResult = Math.min(val1, val2);
    }
    map.set(`${row}-${col}`, triangle[row][col] + nextRowResult);
    return triangle[row][col] + nextRowResult;
}
// @lc code=end
// test case 1: [[-1],[2,3],[1,-1,-3]]
// test case 2: [[-10]]
// test case 3: [[2],[3,4],[6,5,7],[4,1,8,3]]
