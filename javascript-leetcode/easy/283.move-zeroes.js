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
var moveZeroes = function (nums) {
    let slow = -1;
    let fast = 0;
    const len = nums.length;
    if (nums.length < 2) {
        return nums;
    }
    while (fast < len) {
        if (nums[fast] === 0) {
            fast++;
            continue;
        }
        if (nums[++slow]) {
            fast = fast <= slow ? slow + 1 : fast;
            continue;
        }
        nums[slow] = nums[fast];
        nums[fast] = 0;
    }
    return nums;
};
/* 21/21 cases passed (100 ms)
Your runtime beats 23.13 % of javascript submissions
Your memory usage beats 57.49 % of javascript submissions (40.3 MB) */

function moveZerosOne(nums) {
    let lastZero = nums.length - 1;
    while (nums.indexOf(0) > -1 && nums.indexOf(0) < lastZero) {
        nums.splice(nums.indexOf(0), 1);
        nums.push(0);
        lastZero--;
    }
    return nums;
}
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
/* 74/74 cases passed (188 ms)
Your runtime beats 17.36 % of javascript submissions
Your memory usage beats 7.53 % of javascript submissions (46.2 MB) */
// slow and fast pointer
function moveZeroSecond(nums) {
    let slow = -1;
    if (nums.length < 2) {
        return nums;
    }
    while (slow < nums.length) {
        if (nums[++slow] !== 0) {
            continue;
        }
        for (let fast = slow + 1; fast < nums.length; fast++) {
            if (nums[fast] === 0) {
                continue;
            }
            nums[slow] = nums[fast];
            nums[fast] = 0;
            break;
        }
    }
    return nums;
}
/* Accepted
 * 74/74 cases passed (141 ms)
 * Your runtime beats 45.31 % of javascript submissions
 * Your memory usage beats 5.12 % of javascript * submissions (46.7 MB) */
function moveZerosThird(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] !== 0) {
            left++;
            continue;
        }
        nums.splice(left, 1);
        nums.push(0);
        right--;
    }
}
// @lc code=end
