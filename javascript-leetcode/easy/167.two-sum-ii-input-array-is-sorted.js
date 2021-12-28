/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//  Accepted
//  19/19 cases passed (64 ms)
//  Your runtime beats 98.78 % of javascript submissions
//  Your memory usage beats 75.69 % of javascript submissions (39.1 MB)
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        if (sum < target) {
            left++;
        }
        if (sum > target) {
            right--;
        }
    }
    return [];
};
// @lc code=end
