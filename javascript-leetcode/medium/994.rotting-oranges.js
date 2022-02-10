/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
 * Accepted
 * 306/306 cases passed (92 ms)
 * Your runtime beats 72.52 % of javascript submissions
 * Your memory usage beats 9.65 % of javascript submissions (45.9 MB) */
var orangesRotting = function (grid) {
    if (!grid.length) {
        return -1;
    }
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const map = new Map();
    let queue = [];
    let freshCount = 0;
    let max = 0;
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
                map.set(`${r}-${c}`, 0);
            }
            if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const [row, col] = queue[i];
            const currStep = map.get(`${row}-${col}`);
            dirs.forEach((_dir) => {
                const _row = row + _dir[0];
                const _col = col + _dir[1];
                if (_row < 0 || _row >= rowLen || _col < 0 || _col >= colLen) {
                    return;
                }
                if (grid[_row][_col] === 1) {
                    grid[_row][_col] = 2;
                    newQueue.push([_row, _col]);
                    freshCount--;
                    map.set(`${_row}-${_col}`, currStep + 1);
                    max = Math.max(max, currStep + 1);
                }
            });
        }
        queue = newQueue;
    }
    if (freshCount > 0) {
        return -1;
    }
    return max;
};
// @lc code=end
