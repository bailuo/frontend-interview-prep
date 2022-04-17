/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
/*
 * Accepted
 * 80/80 cases passed (74 ms)
 * Your runtime beats 82.37 % of javascript submissions
 * Your memory usage beats 65.11 % of javascript submissions (46.2 MB)
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let prev = Number.MIN_SAFE_INTEGER;
    const isValidBSTHelper = (root) => {
        if (root === null) {
            return true;
        }
        if (!isValidBSTHelper(root.left)) {
            return false;
        }
        if (prev >= root.val) {
            return false;
        }
        prev = root.val;
        return isValidBSTHelper(root.right);
    };
    return isValidBSTHelper(root);
};
// @lc code=end
