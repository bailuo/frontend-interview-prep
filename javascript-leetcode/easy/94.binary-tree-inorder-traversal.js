/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
// pre-order: current, left, right
// in-order: left, current, right
// post-order: left, right, current

/* Accepted
 * 70/70 cases passed (72 ms)
 * Your runtime beats 79.6 % of javascript submissions
 * Your memory usage beats 39.39 % of javascript submissions (39.1 MB) */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    return traverseHelper(root, []);
};

function traverseHelper(root, list) {
    if (!root) {
        return list;
    }
    if (root.left) {
        list = traverseHelper(root.left, list);
    }
    list.push(root.val);
    if (root.right) {
        list = traverseHelper(root.right, list);
    }
    return list;
}
// @lc code=end
