/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
// df = [height of left child - height 0f right child]
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    return Math.abs(calculateTreeHeight(root.left) - calculateTreeHeight(root.right)) <= 1;
};

function calculateTreeHeight(node) {
    if (!node) {
        return 0;
    }
    return Math.max(calculateTreeHeight(node.left), calculateTreeHeight(node.right)) + 1;
}
// @lc code=end

// I havent finsih this question yet, just save it for termproary
