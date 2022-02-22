/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// two pointers solution
/* Accepted
 * 113/113 cases passed (66 ms)
 * Your runtime beats 87.77 % of javascript submissions
 * Your memory usage beats 35.29 % of javascript submissions (41.9 MB) */
var removeElement = function (nums, val) {
    if (!nums) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0] === val ? 0 : 1;
    }
    let end = nums.length - 1;
    let start = -1;
    while (++start <= end) {
        while (nums[end] === val) {
            end--;
        }
        if (end < start) {
            break;
        }
        if (nums[start] === val) {
            const temp = nums[end];
            nums[start] = temp;
            nums[end] = val;
        }
    }
    if (end < 0) {
        return 0;
    }
    nums.splice(end + 1);
    return nums.length;
};
// @lc code=end
