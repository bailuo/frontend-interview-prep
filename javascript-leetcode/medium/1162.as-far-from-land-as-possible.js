/*
 * @lc app=leetcode id=1162 lang=javascript
 *
 * [1162] As Far from Land as Possible
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    return maxDistanceOne(grid);
};
/*
 * Accepted
 * 35/35 cases passed (1688 ms)
 * Your runtime beats 10.53 % of javascript submissions
 * Your memory usage beats 28.95 % of javascript submissions (54.3 MB)
 * */
const maxDistanceOne = function (grid) {
    let ans = -1;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 0) {
                ans = Math.max(ans, maxDistanceBFS(grid, r, c));
            }
        }
    }
    return ans;
};
const maxDistanceBFS = function (grid, r, c) {
    const rowLength = grid.length;
    const colLength = grid[0].length;
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const queue = [];
    const map = new Map();
    queue.unshift([r, c]);
    // r* rowLength + c is to make it easier to index
    map.set(r * rowLength + c, 0);
    while (queue.length) {
        const [currentRow, currentCol] = queue.pop();
        const step = map.get(currentRow * rowLength + currentCol);
        if (grid[currentRow][currentCol] === 1) {
            return step;
        }
        dirs.forEach((_dir) => {
            const _dirRow = currentRow + _dir[0];
            const _dirCol = currentCol + _dir[1];
            if (_dirRow < 0 || _dirRow >= rowLength || _dirCol < 0 || _dirCol >= colLength) {
                return;
            }
            const key = _dirRow * rowLength + _dirCol;
            // if the cell is visited, simply return
            if (map.has(key)) {
                return;
            }
            queue.unshift([_dirRow, _dirCol]);
            map.set(key, step + 1);
        });
    }
    return -1;
};
// @lc code=end
