/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
/*
 * Accepted
 * 93/93 cases passed (83 ms)
 * Your runtime beats 77.28 % of javascript submissions
 * Your memory usage beats 64.27 % of javascript submissions (48.4 MB)
 * */
var kthSmallest = function (root, k) {
    let pre = null;
    const queue = [];
    const dfs = (node) => {
        if (node === null) {
            return;
        }
        // left
        dfs(node.left);
        // current
        if (pre !== null) {
            queue.push(pre.val);
        }
        pre = node;
        // right
        dfs(node.right);
    };
    dfs(root);
    queue.push(pre.val);
    return queue[k - 1];
};
// @lc code=end
