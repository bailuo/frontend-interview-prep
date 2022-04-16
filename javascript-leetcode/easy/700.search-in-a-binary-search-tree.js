/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
/*
 * Accepted
 * 36/36 cases passed (77 ms)
 * Your runtime beats 88.42 % of javascript submissions
 * Your memory usage beats 47.46 % of javascript submissions (49.7 MB) */
var searchBST = function (root, val) {
    if (null === root) {
        return null;
    }
    if (root.val === val) {
        return root;
    }
    if (root.val > val) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};
// @lc code=end
