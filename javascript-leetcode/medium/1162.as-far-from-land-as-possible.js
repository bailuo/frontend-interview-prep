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
    return maxDistanceTwo(grid);
};

/*
 * Accepted
 * 35/35 cases passed (1688 ms)
 * Your runtime beats 10.53 % of javascript submissions
 * Your memory usage beats 28.95 % of javascript submissions (54.3 MB)
 *
 *  One Source BFS
 *  a basic logic is to explore all cells with a BFS approach, from water cells, we count each step when we move
 *
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
    // set initial step to be 0
    map.set(r * rowLength + c, 0);
    while (queue.length) {
        const [currentRow, currentCol] = queue.pop();
        const step = map.get(currentRow * rowLength + currentCol);
        // if the value equal to 1, it means we reached a land,
        // so we just return the current step count, there is not need to continue
        if (grid[currentRow][currentCol] === 1) {
            return step;
        }
        // otherwise, we explore four connected cells
        dirs.forEach((_dir) => {
            const _dirRow = currentRow + _dir[0];
            const _dirCol = currentCol + _dir[1];
            // examine whether the cell is out of range
            if (_dirRow < 0 || _dirRow >= rowLength || _dirCol < 0 || _dirCol >= colLength) {
                return;
            }
            const key = _dirRow * rowLength + _dirCol;
            // if the cell is visited, simply return
            if (map.has(key)) {
                return;
            }
            // put the cell in the queue
            queue.unshift([_dirRow, _dirCol]);
            // we haven't reached a land yet, so we add one more step
            map.set(key, step + 1);
        });
    }
    return -1;
};
/*
 * convert multi-source to one source
 * Find land and try to reach water cell from land, the remember distance to water from land
 *
 * Accepted
 * 35/35 cases passed (240 ms)
 * Your runtime beats 34.21 % of javascript submissions
 * Your memory usage beats 28.95 % of javascript submissions (54.5 MB)
 * */
const maxDistanceTwo = function (grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    const queue = [];
    const stepMap = new Map();
    let ans = -1;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 1) {
                // push all land into the queue
                queue.unshift([row, col]);
                stepMap.set(row * rowLen + col, 0);
            }
        }
    }
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ];
    while (queue.length) {
        const [r, c] = queue.pop();
        const step = stepMap.get(r * rowLen + c);
        dirs.forEach((_dir) => {
            const _r = r + _dir[0];
            const _c = c + _dir[1];
            if (_r < 0 || _r >= rowLen || _c < 0 || _c >= colLen) {
                return;
            }
            // the grid is visited already, continue
            if (grid[_r][_c] !== 0) {
                return;
            }
            const cellStep = step + 1;
            // mark as visited
            grid[_r][_c] = cellStep;
            queue.unshift([_r, _c]);
            stepMap.set(_r * rowLen + _c, cellStep);
            ans = Math.max(ans, cellStep);
        });
    }
    return ans;
};
// @lc code=end
