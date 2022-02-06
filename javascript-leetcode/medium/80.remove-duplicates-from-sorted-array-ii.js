/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 * Accepted
 * 164/164 cases passed (88 ms)
 * Your runtime beats 72.43 % of javascript submissions
 * Your memory usage beats 5.44 % of javascript submissions (44.9 MB) */
// two pointers
var removeDuplicates = function (nums) {
    const countMap = new Map();
    let left = -1;
    let right = nums.length - 1;
    while (++left <= right) {
        // if the nums[left] is swapped with the tail elements, we need to perform an resort before we compare with the next element
        let tempPointer = right + 1;
        while (--tempPointer >= left) {
            if (nums[left] <= nums[tempPointer]) {
                continue;
            }
            const temp = nums[tempPointer];
            nums[tempPointer] = nums[left];
            nums[left] = temp;
        }
        // set a counter
        if (!countMap.has(nums[left])) {
            countMap.set(nums[left], 0);
        }
        const currCount = countMap.get(nums[left]) + 1;
        countMap.set(nums[left], currCount);
        // if the character is already above 2, then we swap the repeated charachter with the tail one of the array
        if (currCount > 2) {
            nums[left] = nums[right];
            nums[right] = '_';
            // after the swap, the right pointer is aleady "_", so we move one pointion to the left
            right--;
            // since we do ++left at each loop, now we need to take one step back, so next round will be a rest for left pointer
            left--;
        }
    }
    // the leetcode askes javascript code to submit only elements w/o "_", so we do a splice
    nums.splice(right + 1);
    return nums.length;
};
// @lc code=end
