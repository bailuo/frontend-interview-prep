/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return sortedSquaresAbs(nums);
};
/* 137/137 cases passed (155 ms)
 * Your runtime beats 41.73 % of javascript submissions
 * Your memory usage beats 80.21 % of javascript submissions (45.6 MB)
 * */
const sortedSquaresAbs = function (nums) {
    return nums.sort((_num1, _num2) => Math.abs(_num1) - Math.abs(_num2)).map((_num) => _num * _num);
};
/* 137/137 cases passed (346 ms)
 * Your runtime beats 6.01 % of javascript submissions
 * Your memory usage beats 55.15 % of javascript submissions (45.8 MB)
 */
const sortedSquaresTwoPointers = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    const sortedList = [];
    while (left <= right) {
        const squaredLeft = nums[left] * nums[left];
        const squaredRight = nums[right] * nums[right];
        if (squaredLeft > squaredRight) {
            sortedList.unshift(squaredLeft);
            left++;
            continue;
        }
        sortedList.unshift(squaredRight);
        right--;
    }
    return sortedList;
};
// @lc code=end
