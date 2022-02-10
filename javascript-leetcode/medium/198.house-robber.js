/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dynamic programming
var rob = function (nums) {
    return robFunc2(nums);
};
// Accepted
// 68/68 cases passed (72 ms)
// Your runtime beats 72.02 % of javascript submissions
// Your memory usage beats 34.4 % of javascript submissions (38.8 MB)

var robFunc1 = function (nums) {
    let previous = 0;
    let current = 0;
    let temp = 0;
    for (let index in nums) {
        temp = current;
        current = Math.max(current, nums[index] + previous);
        previous = temp;
    }
    return Math.max(current, previous);
};

/* Accepted
 * 68/68 cases passed (83 ms)
 * Your runtime beats 55.41 % of javascript submissions
 * Your memory usage beats 9.58 % of javascript submissions (42.2 MB)
 * */
var robFunc2 = function (nums) {
    if (!nums) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    const map = new Map();
    // robber either the last one, or the previous one, cannot do both
    return Math.max(robHelper(nums, nums.length - 1, map), robHelper(nums, nums.length - 2, map));
};

function robHelper(nums, index, map) {
    if (index < 2) {
        return nums[index];
    }
    if (index === 2) {
        return Math.max(nums[1], nums[0] + nums[2]);
    }
    // const nextIndex = nums[index - 3] > nums[index -2] ? index - 3 : index - 2;
    const prevNear = map.has(index - 2) ? map.get(index - 2) : robHelper(nums, index - 2, map);
    const prevFar = map.has(index - 3) ? map.get(index - 3) : robHelper(nums, index - 3, map);
    const currMax = nums[index] + Math.max(prevNear, prevFar);
    map.set(index - 2, prevNear);
    map.set(index - 3, prevFar);
    map.set(index, currMax);
    return currMax;
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = rob;
// @after-stub-for-debug-end

//test case 1: [0]
//test case 2: [2,1,1,2]
//test caae 3: [1,2,3,1]
//test case 4: [2,7,9,3,1]
//test case 5: [4,1,2,7,5,3,1]
