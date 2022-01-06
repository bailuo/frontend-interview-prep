/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
/*  Accepted
 * 52/52 cases passed (377 ms)
 * Your runtime beats 9.19 % of javascript submissions
 * Your memory usage beats 22.25 % of javascript submissions (95.5 MB)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    const queue = [[root, 1]];
    let current = null;
    while (queue.length) {
        current = queue.shift();
        const [node, level] = current;
        if (!node.left && !node.right) {
            break;
        }
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level + 1]);
        }
    }
    return current[1];
};

/*  Accepted
 52/52 cases passed (372 ms)
 Your runtime beats 9.95 % of javascript submissions
 Your memory usage beats 5.54 % of javascript submissions (104.3 MB) */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth2 = function (root) {
    return minDepthHelper(root, 0);
};

function minDepthHelper(root, level) {
    if (!root) {
        return level;
    }
    if (!root.left && !root.right) {
        return level + 1;
    }
    if (!root.left) {
        return minDepthHelper(root.right, level + 1);
    }
    if (!root.right) {
        return minDepthHelper(root.left, level + 1);
    }

    return Math.min(minDepthHelper(root.right, level + 1), minDepthHelper(root.left, level + 1));
}
// @lc code=end
