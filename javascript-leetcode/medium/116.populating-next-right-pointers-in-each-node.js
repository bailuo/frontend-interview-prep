/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) {
        return null;
    }
    return connectHelper(root, null);
};
/*
 * Accepted
 * 59/59 cases passed (72 ms)
 * Your runtime beats 99.69 % of javascript submissions
 * Your memory usage beats 13.19 % of javascript submissions (47.9 MB)
 *  */
function connectHelper(root, parent) {
    if (!root) {
        return null;
    }
    if (parent === null) {
        root.next = null;
    }
    if (!root.left) {
        return root;
    }
    root.left.next = root.right;
    root.right.next = root.next !== null ? root.next.left : null;
    root.left = connectHelper(root.left, root);
    root.right = connectHelper(root.right, root);
    return root;
}
// @lc code=end
