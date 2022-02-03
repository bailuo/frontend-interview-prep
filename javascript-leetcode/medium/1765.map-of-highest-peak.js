/*
 * @lc app=leetcode id=1765 lang=javascript
 *
 * [1765] Map of Highest Peak
 */

// @lc code=start
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
/*
 * Accepted
 * 59/59 cases passed (986 ms)
 * Your runtime beats 87.1 % of javascript submissions
 * Your memory usage beats 64.52 % of javascript submissions (103 MB)
 * */
var highestPeak = function (isWater) {
    // general cell queue
    let queue = [];
    const rowLen = isWater.length;
    const colLen = isWater[0].length;
    // four directions
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, 1],
        [0, -1],
    ];
    // convert the cells from 1, 0 to 0, -1
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (isWater[row][col] === 1) {
                queue.push([row, col]);
            }
            isWater[row][col] = isWater[row][col] === 1 ? 0 : -1;
        }
    }
    while (queue.length) {
        const newQueue = [];
        // instead of shift one element each time, process the queue directly
        for (let [row, col] of queue) {
            // put neighbour elements in the new queue
            dirs.forEach((_dir) => {
                const _r = row + _dir[0];
                const _c = col + _dir[1];
                // out of border
                if (_r < 0 || _r >= rowLen || _c < 0 || _c >= colLen) {
                    return;
                }
                // the cell is either water or visited land
                if (isWater[_r][_c] !== -1) {
                    return;
                }
                isWater[_r][_c] = isWater[row][col] + 1;
                newQueue.push([_r, _c]);
            });
        }
        queue = newQueue;
    }
    return isWater;
};
// @lc code=end
