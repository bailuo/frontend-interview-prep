/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const swap = (idx1, idx2, nums) => {
        const temp = nums[idx2];
        nums[idx2] = nums[idx1];
        nums[idx1] = temp;
    };
    let ptr = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            swap(ptr, i, nums);
            ptr++;
        }
    }
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 1) {
            swap(ptr, i, nums);
            ptr++;
        }
    }
    return nums;
};
// @lc code=end
