/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//  Accepted
//  31/31 cases passed (64 ms)
//  Your runtime beats 99.92 % of javascript submissions
//  Your memory usage beats 47.82 % of javascript submissions (41.5 MB)
// divid and conquer
var sortedArrayToBST = function (nums) {
    if (nums === null || nums.length === 0) {
        return null;
    }
    const len = nums.length;
    const midIndex = Math.floor(len / 2);
    const root = new TreeNode(nums[midIndex]);
    const leftSideElements = nums.slice(0, midIndex);
    const rightSideElements = nums.slice(midIndex + 1, len);
    root.left = sortedArrayToBST(leftSideElements);
    root.right = sortedArrayToBST(rightSideElements);
    return root;
};
// @lc code=end
