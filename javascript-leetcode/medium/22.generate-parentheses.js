/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
const generateParenthesis1 = (n) => {
    if (n === 0) return [];
    if (n === 1) return ['()'];
    const result = [];
    const dfs = (path, leftCount, rightCount) => {
        if (leftCount > n || rightCount > leftCount) {
            return;
        }
        if (path.length === n * 2) {
            result.push(path);
            return;
        }
        dfs(path + '(', leftCount + 1, rightCount);
        dfs(path + ')', leftCount, rightCount + 1);
    };
    dfs('', 0, 0);
    return result;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    return generateParenthesis1(n);
};
// @lc code=end
