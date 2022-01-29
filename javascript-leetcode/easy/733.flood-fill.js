/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/*
 * DFS solution
 * Accepted
 * 277/277 cases passed (84 ms)
 * Your runtime beats 92.93 % of javascript submissions
 * Your memory usage beats 5.02 % of javascript submissions (44.6 MB) */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    const visited = image.map((_r) => _r.map((_c) => false));
    return floodFillHelper(image, sr, sc, image[sr][sc], newColor, visited);
};

function floodFillHelper(image, r, c, currentColor, newColor, visited) {
    const rLength = image.length;
    const cLength = image[0].length;
    if (image[r][c] !== currentColor || visited[r][c] === true) {
        return image;
    }
    image[r][c] = newColor;
    visited[r][c] = true;
    if (c >= 1) {
        floodFillHelper(image, r, c - 1, currentColor, newColor, visited);
    }
    if (c < cLength - 1) {
        floodFillHelper(image, r, c + 1, currentColor, newColor, visited);
    }
    if (r >= 1) {
        floodFillHelper(image, r - 1, c, currentColor, newColor, visited);
    }
    if (r < rLength - 1) {
        floodFillHelper(image, r + 1, c, currentColor, newColor, visited);
    }
    return image;
}
// @lc code=end
