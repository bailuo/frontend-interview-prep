/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
/*
 * Similar Question: 1765
 * multi-source BFS
 * Accepted
 *  50/50 cases passed (326 ms)
 * Your runtime beats 28.49 % of javascript submissions
 * Your memory usage beats 15.36 % of javascript submissions (59.3 MB) */
var updateMatrix = function (mat) {
    if (!mat) {
        return [];
    }
    let queue = [];
    const rowLength = mat.length;
    const colLength = mat[0].length;
    const visited = mat.map((_row) => _row.map((_col) => false));
    // const distanceMap = new Map();
    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < colLength; col++) {
            if (mat[row][col] === 0) {
                queue.push([row, col]);
                visited[row][col] = true;
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
            dirs.forEach(([_row, _col]) => {
                const r = row + _row;
                const c = col + _col;
                if (r < 0 || r >= rowLength || c < 0 || c >= colLength) {
                    return;
                }
                if (visited[r][c] === true) {
                    return;
                }
                mat[r][c] = mat[row][col] + 1;
                visited[r][c] = true;
                newQueue.push([r, c]);
            });
        }
        queue = newQueue;
    }
    return mat;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = updateMatrix;
// @after-stub-for-debug-end
