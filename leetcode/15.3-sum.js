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
        if (nums[j] > targetPeer) {
            j--;
        } else if (nums[j] === targetPeer) {
            combinations.push([target, nums[i], targetPeer]);
            i++;
        } else {
            i++;
        }
    }
    return combinations;
}
// @lc code=end
