/*
 * @lc app=leetcode id=1380 lang=javascript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*
 * Accepted
 * 104/104 cases passed (131 ms)
 * Your runtime beats 18.63 % of javascript submissions
 * Your memory usage beats 6.86 % of javascript submissions (45.3 MB) */
var luckyNumbers = function (matrix) {
    const m = matrix.length,
        n = matrix[0].length;
    // prepare a row with MAX_SAFE_INTEGER
    const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
    // prepare a column with zeros
    const maxCol = new Array(n).fill(0);
    // go through the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // if any element is smaller, replace it
            minRow[i] = Math.min(minRow[i], matrix[i][j]);
            // if any elelment is greater, replace it
            maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
        }
    }
    // before net step, we have a row of all minium numbers, and col of all max numbers
    const ret = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // if the element exists in both two dimensions, than it is the result
            if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
                ret.push(matrix[i][j]);
            }
        }
    }
    return ret;
};
// leetcode official solution
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/solution/ju-zhen-zhong-de-xing-yun-shu-by-leetcode-solution/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// @lc code=end
