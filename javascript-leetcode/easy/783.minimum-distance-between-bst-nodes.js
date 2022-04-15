/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
var minDiffInBST = function (root) {
    let pre = -1;
    let result = Number.MAX_SAFE_INTEGER;
    const dfs = (node) => {
        if (node === null) {
            return;
        }
        dfs(node.left);
        if (pre !== -1) {
            result = Math.min(result, Math.abs(node.val - pre));
        }
        pre = node.val;
        dfs(node.right);
    };
    dfs(root);
    return result;
};
// @lc code=end

/*
 * Accepted
 * 48/48 cases passed (68 ms)
 * Your runtime beats 76.41 % of javascript submissions
 * Your memory usage beats 95.38 % of javascript submissions (42.8 MB) */
