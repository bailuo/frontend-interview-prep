/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/*
 * Accepted
 * 32/32 cases passed (120 ms)
 * Your runtime beats 61.04 % of javascript submissions
 * Your memory usage beats 5.29 % of javascript submissions (47.7 MB)
 * */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return findKthLargestTwo(nums, k);
};

function findKthLargestOne(nums, k) {
    const stack = nums.splice(0, k).sort((_a, _b) => _b - _a);
    let pointer = -1;
    while (++pointer < nums.length) {
        const tempStack = [];
        while (stack.length && stack[stack.length - 1] <= nums[pointer]) {
            const stackTop = stack.pop();
            tempStack.push(stackTop);
        }
        if (stack.length === k) {
            continue;
        }
        stack.push(nums[pointer]);
        while (stack.length < k && tempStack.length) {
            const tempStackTail = tempStack.pop();
            stack.push(tempStackTail);
        }
    }
    return stack[k - 1];
}

function partition(arr, left, right) {
    let mark = left;
    for (let index = left + 1; index <= right; index++) {
        if (arr[index] < arr[left]) {
            mark++;
            console.log(mark, index);
            [arr[index], arr[mark]] = [arr[mark], arr[index]];
        }
    }
    [arr[left], arr[mark]] = [arr[mark], arr[left]];
    return mark;
}
/*
 * Accepted
 * 32/32 cases passed (161 ms)
 * Your runtime beats 23.36 % of javascript submissions
 * Your memory usage beats 14.32 % of javascript submissions (44.3 MB)
 */

function findKthLargestTwo(nums, k) {
    let targetIndex = nums.length - k;
    let right = nums.length - 1;
    let left = 0;
    // first time
    let index = partition(nums, left, right);
    while (index !== targetIndex) {
        if (index > targetIndex) {
            right = index - 1;
        } else {
            left = index + 1;
        }
        index = partition(nums, left, right);
    }
    return nums[index];
}
// @lc code=end
