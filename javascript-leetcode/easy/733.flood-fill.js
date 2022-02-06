/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    return fillTwo(image, sr, sc, image[sr][sc], newColor);
};
/*
 * Accepted
 * 277/277 cases passed (109 ms)
 * Your runtime beats 53.48 % of javascript submissions
 * Your memory usage beats 13.22 % of javascript submissions (44.3 MB)
 *  */
function fillTwo(image, sr, sc, currentColor, newColor) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
        return image;
    }
    if (currentColor === newColor) {
        return image;
    }
    if (image[sr][sc] !== currentColor) {
        return image;
    }
    image[sr][sc] = newColor;
    image = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ].reduce((accu, curr) => {
        const [_dirR, _dirC] = curr;
        return fillTwo(accu, _dirR + sr, _dirC + sc, currentColor, newColor);
    }, image);
    return image;
}
/*
 * DFS solution
 * Accepted
 * 277/277 cases passed (84 ms)
 * Your runtime beats 92.93 % of javascript submissions
 * Your memory usage beats 5.02 % of javascript submissions (44.6 MB) */
function fillOne(image, sr, sc, newColor) {
    const visited = image.map((_r) => _r.map((_c) => false));
    return floodFillHelper(image, sr, sc, image[sr][sc], newColor, visited);
}

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
