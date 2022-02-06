/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    return mergeHelper(root1, root2);
};
/*
 * Accepted
 * 182/182 cases passed (100 ms)
 * Your runtime beats 96.71 % of javascript submissions
 * Your memory usage beats 5.9 % of javascript submissions (51.1 MB)
 */
function mergeHelper(root1, root2) {
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    root2.val = root2.val + root1.val;
    root2.left = mergeHelper(root1.left, root2.left);
    root2.right = mergeHelper(root1.right, root2.right);
    return root2;
}
// @lc code=end
