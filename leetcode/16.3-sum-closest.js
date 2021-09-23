/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */
// 131/131 cases passed (84 ms)
// Your runtime beats 70.08 % of javascript submissions
// Your memory usage beats 60.89 % of javascript submissions (40.3 MB)
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    let start = 0;
    let closetSum = undefined;
    while (start < length) {
        let left = start + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[left] + nums[right] + nums[start];
            // find cloest sum
            if (closetSum === undefined) {
                closetSum = currentSum;
            } else {
                // TODO compare the gap between sum - target and closest sum and target
                const currentSumGap = Math.abs(currentSum - target);
                const cloestSumGap = Math.abs(closetSum - target);
                closetSum = currentSumGap < cloestSumGap ? currentSum : closetSum;
            }
            if (currentSum < target) {
                // if the sum is less than the target, try to fins a closer one
                left++;
            } else if (currentSum > target) {
                // if the sum is greater than current, move right to the position before it, and see if we have a smaller value
                right--;
            } else {
                // handle when target is the closest value
                return currentSum;
            }
        }
        start++;
    }
    return closetSum;
};
// @lc code=end
