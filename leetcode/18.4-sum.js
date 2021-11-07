/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const results = [];
    nums.sort((a, b) => a - b);
    const len = nums.length;
    // if there is not enough elements, just return empty array
    if (nums === undefined || nums.length < 4) {
        return results;
    }
    for (let idx = 0; idx < len - 3 && nums[idx] <= target; idx++) {
        // skip duplicated elements
        if (idx > 0 && nums[idx] === nums[idx - 1]) {
            continue;
        }
        // degree to three sum problem
        for (let threeSumIndex = idx + 1; threeSumIndex < len - 2; threeSumIndex++) {
            if (threeSumIndex !== idx + 1 && nums[threeSumIndex] === nums[threeSumIndex - 1]) {
                continue;
            }
            // then let us simplify this into two sum problem
            let left = threeSumIndex + 1;
            let right = len - 1;
            while (left < right) {
                const currentSum = nums[idx] + nums[threeSumIndex] + nums[left] + nums[right];
                if (currentSum < target) {
                    left++;
                } else if (currentSum > target) {
                    right--;
                } else {
                    results.push([nums[idx], nums[threeSumIndex], nums[left], nums[right]]);
                    left++;
                    right--;
                    // skip the duplicates
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }
    return results;
};
// @lc code=end

// a general approach of N-sum problem solutions is to reduce them into lower level problems
// four sum ---> three sum ---> two sum
