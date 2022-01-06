/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/* Accepted
 * 5833/5833 cases passed (394 ms)
 * Your runtime beats 7.3 % of javascript submissions
 * Your memory usage beats 34.89 % of javascript submissions (48.6 MB) */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    const rowsCount = grid.length;
    const colsCount = grid[0].length;
    const queue = [[0, 0]];
    // 记录已经查过的地方，避免重复计算
    const visitGrid = new Array(rowsCount).fill(0).map(() => {
        return new Array(colsCount).fill(false);
    });
    let perimeter = 0;
    while (queue.length) {
        const [row, col] = queue.shift();
        if (visitGrid[row][col] === true) {
            continue;
        }
        visitGrid[row][col] = true;
        const currentCellValue = grid[row][col];
        // as long as we are not at edge, push more elments into the queue
        if (row < rowsCount - 1 && visitGrid[row + 1][col] === false) {
            queue.push([row + 1, col]);
        }
        if (col < colsCount - 1 && visitGrid[row][col + 1] === false) {
            queue.push([row, col + 1]);
        }
        if (row < rowsCount - 1 && currentCellValue !== grid[row + 1][col]) {
            perimeter++;
        }
        if (col < colsCount - 1 && currentCellValue !== grid[row][col + 1]) {
            perimeter++;
        }
        if (currentCellValue === 0) {
            continue;
        }
        if (col === 0) {
            perimeter++;
        }
        if (col === colsCount - 1) {
            perimeter++;
        }
        if (row === 0) {
            perimeter++;
        }
        if (row === rowsCount - 1) {
            perimeter++;
        }
    }
    return perimeter;
};
// @lc code=end
