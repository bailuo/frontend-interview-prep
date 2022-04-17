/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    return increasingBST_DFS(root);
};
const dfs = (root) => {
    if (!root) {
        return;
    }
    dfs(root.left);
    nodes.push(root);
    dfs(root.right);
};
/*
 * O(n) / O(n)
 * Accepted
 * 37/37 cases passed (73 ms)
 * Your runtime beats 57.14 % of javascript submissions
 * Your memory usage beats 83.06 % of javascript submissions (42.5 MB)
 * */
var increasingBST_DFS = function (root) {
    let head = null;
    let curr = null;
    const nodes = [];
    dfs(root);
    for (const _node of nodes) {
        // has to clean left and right, otherwise we will get cycled loop
        _node.left = null;
        _node.right = null;
        if (head === null) {
            curr = _node;
            head = curr;
        } else {
            curr.right = _node;
            curr = curr.right;
        }
    }
    return head;
};
// @lc code=end
