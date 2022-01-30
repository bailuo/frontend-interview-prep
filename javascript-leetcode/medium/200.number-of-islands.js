/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let result = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (Number(grid[r][c]) == 1) {
                const searchResult = search(grid, r, c) > 0 ? 1 : 0;
                result += searchResult;
            }
        }
    }
    return result;
};

function search(grid, r, c) {
    const rMax = grid.length - 1;
    const cMax = grid[0].length - 1;
    if (r < 0 || r > rMax || c < 0 || c > cMax) {
        return 0;
    }
    if (Number(grid[r][c]) !== 1) {
        return 0;
    }
    grid[r][c] = 2;
    return 1 + search(grid, r - 1, c) + search(grid, r + 1, c) + search(grid, r, c - 1) + search(grid, r, c + 1);
}
// @lc code=end
/* Accepted
 * 49/49 cases passed (122 ms)
 * Your runtime beats 50.15 % of javascript submissions
 * Your memory usage beats 43.06 % of javascript submissions (44.3 MB) */
