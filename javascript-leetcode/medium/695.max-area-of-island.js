/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/* Accepted
 * 728/728 cases passed (80 ms)
 * Your runtime beats 98.85 % of javascript submissions
 * Your memory usage beats 27.71 % of javascript submissions (45 MB) */
function search(grid, r, c) {
    const rMax = grid.length - 1;
    const cMax = grid[0].length - 1;
    if (r < 0 || r > rMax || c < 0 || c > cMax) {
        return 0;
    }
    if (grid[r][c] !== 1) {
        return 0;
    }
    grid[r][c] = 2;
    return 1 + search(grid, r - 1, c) + search(grid, r + 1, c) + search(grid, r, c - 1) + search(grid, r, c + 1);
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let result = Number.MIN_VALUE;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                const area = search(grid, r, c);
                result = Math.max(result, area);
            }
        }
    }
    return result;
};
// @lc code=end
