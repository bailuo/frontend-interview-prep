/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let results = [];
    // sort first, so you dont have to search when the number itself is already above 0
    nums.sort((a, b) => a - b);
    let start = 0;
    const length = nums.length;
    while (start < length && nums[start] <= 0) {
        if (nums[start] === nums[start - 1]) {
            start++;
            continue;
        }
        // find combnations from the next index of the current pointer
        const peerCombinations = findTwoSum(nums.slice(start + 1), nums[start]);
        results = results.concat(peerCombinations);
        start++;
    }
    // since the result need to be unique, we need to filter out the duplicated ones
    return results
        .sort((a, b) => a.toString().localeCompare(b.toString()))
        .reduce((accu, curr, index, arr) => {
            if (accu.length === 0 || arr[index - 1].toString() !== curr.toString()) {
                accu.push(curr);
            }
            return accu;
        }, []);
};
// this is the core function of the solution, searching results from two ends of the sliced array
function findTwoSum(nums, target) {
    if (nums.length === 1) {
        return [];
    }
    const peerSum = 0 - target;
    const combinations = [];
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const targetPeer = peerSum - nums[i];
        // if it is greater, move the right pointer one position to the left
        if (nums[j] > targetPeer) {
            j--;
        } else if (nums[j] === targetPeer) {
            // if the combination works, we push it to the combs
            combinations.push([target, nums[i], targetPeer]);
            // and we still need to move the left pointer since we could still have more combs starting from next position
            i++;
        }
        // if it is less than the target, move the left pointer one index to the right
        else {
            i++;
        }
    }
    return combinations;
}
// @lc code=end
