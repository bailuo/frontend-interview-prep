/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

/*
 * in order solution
 * Accepted
 * 24/24 cases passed (108 ms)
 * Your runtime beats 67.01% of javascript submissions
 * Your memory usage beats 28.87% of javascript submissions (48.4 MB)
 * */
var inorderSuccessor = function (root, p) {
    let prev = null;
    let curr = null;
    const dfs = (node) => {
        if (node === null || curr !== null) {
            return;
        }
        dfs(node.left);
        if (prev !== null && p.val === prev.val) {
            curr = node;
        }
        prev = node;
        dfs(node.right);
    };
    dfs(root);

    return curr;
};
