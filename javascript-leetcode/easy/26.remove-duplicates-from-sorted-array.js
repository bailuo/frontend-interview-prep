/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/* Accepted
 * 362/362 cases passed (94 ms)
 * Your runtime beats 66.42 % of javascript submissions
 * Your memory usage beats 5.08 % of javascript submissions (44.9 MB) */

function removeDuplicates1(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let slow = 1;
    let fast = 1;
    while (fast < nums.length) {
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
}
/*
 * Accepted
 * 362/362 cases passed (80 ms)
 * Your runtime beats 95.4 % of javascript submissions
 * Your memory usage beats 6.11 % of javascript submissions (44.6 MB)
 */
function removeDuplicates2(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let slow = 1;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] === nums[fast - 1]) {
            continue;
        }
        nums[slow] = nums[fast];
        slow++;
    }
    return slow;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    return removeDuplicates2(nums);
};
// @lc code=end
