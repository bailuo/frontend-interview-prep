/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */
/*
 * Accepted
 * 39/39 cases passed (94 ms)
 * Your runtime beats 19.43 % of javascript submissions
 * Your memory usage beats 96.24 % of javascript submissions (41.3 MB)
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
 * @return {number}
 */
var maxDepth = function (root) {
    return maxDepthHelper(root, 0);
};

function maxDepthHelper(root, level) {
    if (!root) {
        return level;
    }
    return Math.max(maxDepthHelper(root.left, level), maxDepthHelper(root.right, level)) + 1;
}
// @lc code=end
