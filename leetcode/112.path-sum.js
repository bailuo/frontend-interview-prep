/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
//  Accepted
//  117/117 cases passed (80 ms)
//  Your runtime beats 85.49 % of javascript submissions
//  Your memory usage beats 9.85 % of javascript submissions (43.1 MB)
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }
    return isSubPathValid(root, 0, targetSum);
};

function isSubPathValid(root, currentSum, targetSum) {
    if (!root) {
        return false;
    }
    currentSum += root.val;
    if (root.left || root.right) {
        return isSubPathValid(root.left, currentSum, targetSum) || isSubPathValid(root.right, currentSum, targetSum);
    }
    // leaf node
    return currentSum === targetSum;
}
// @lc code=end
