/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function (root) {
    // return sumHelper(root, false);
    return sumHelperBFS(root);
};
/* Accepted
 * 100/100 cases passed (96 ms)
 * Your runtime beats 8.37 % of javascript submissions
 * Your memory usage beats 96.35 % of javascript submissions (40.3 MB) */
// depth first search
function sumHelper(root, isLeft) {
    if (!root) {
        return 0;
    }
    // if it is leaf node and is left node, return the value
    // otherwise, checkout subbranch
    return !root.left && !root.right && isLeft ? root.val : sumHelper(root.right, false) + sumHelper(root.left, true);
}
/* Accepted
 * 100/100 cases passed (112 ms)
 * Your runtime beats 5.73 % of javascript submissions
 * Your memory usage beats 6.59 % of javascript submissions (41.6 MB)
 */
function sumHelperBFS(root) {
    let sum = 0;
    const queue = [[root, false]];
    while (queue.length) {
        const [node, isLeft] = queue.shift();
        if (isLeft && !node.left && !node.right) {
            sum += node.val;
            continue;
        }
        if (node.left) queue.push([node.left, true]);
        if (node.right) queue.push([node.right, false]);
    }
    return sum;
}
// @lc code=end
