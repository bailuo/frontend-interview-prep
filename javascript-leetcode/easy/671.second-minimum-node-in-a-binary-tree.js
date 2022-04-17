/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function (root) {
    const set = new Set();
    const dfs = (root) => {
        if (!root) return;
        dfs(root.left);
        set.add(root.val);
        dfs(root.right);
    };
    dfs(root);
    return set.size < 2 ? -1 : Array.from(set).sort()[1];
};
// @lc code=end
