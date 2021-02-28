/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 21/21 cases passed (100 ms)
Your runtime beats 23.13 % of javascript submissions
Your memory usage beats 57.49 % of javascript submissions (40.3 MB) */
var moveZeroes = function (nums) {
    let lastZero = nums.length - 1;
    while (nums.indexOf(0) > -1 && nums.indexOf(0) < lastZero) {
        nums.splice(nums.indexOf(0), 1);
        nums.push(0);
        lastZero--;
    }
};

/* 
Accepted
21/21 cases passed (84 ms)
Your runtime beats 82.55 % of javascript submissions
Your memory usage beats 40.85 % of javascript submissions (40.5 MB) */

var moveZeroAonther = function (nums) {
    let pointer = 0;
    let len = nums.length;
    while (pointer < len) {
        /*  we need to check the one before current index, 
        so we wont miss the consequential zero situation */
        if (pointer > 0 && nums[pointer - 1] === 0) {
            pointer -= 1;
        }
        if (nums[pointer] === 0) {
            nums.splice(pointer, 1);
            nums.push(0);
            len--;
        }
        pointer++;
    }
};
// @lc code=end
