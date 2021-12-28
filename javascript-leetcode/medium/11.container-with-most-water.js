/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// brutal force

function maxAreaBrutalForce(height) {
    let maxArea = 0;
    for (let m = 0; m < height; m++) {
        for (let n = m + 1; n < height; n++) {
            const area = (n - m) * Math.min(height[m], height[n]);
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}
// optimizeds
function maxAreaOptimized(height) {
    // check the height of left and right
    // calculate local area
    // move in from the lower height
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max;
}

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max;
};
// @lc code=end
