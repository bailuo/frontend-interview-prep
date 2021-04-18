/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
<<<<<<< HEAD
var countNodes = function (root) {
    if (!root) {
        return 0;
    }
    let depth = 1;
    return countSubTree(root.left, depth) + countSubTree(root.right, depth) + 1;
};

/* very basic approach, brutal force
Accepted
18/18 cases passed (108 ms)
Your runtime beats 73.42 % of javascript submissions
Your memory usage beats 77.64 % of javascript submissions (56.6 MB)
 */
function countSubTree(node) {
    if (!node) {
        return 0;
    }
    return countSubTree(node.left) + countSubTree(node.right) + 1;
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = countNodes;
// @after-stub-for-debug-end
=======
var countNodes = function(root) {
    
};
// @lc code=end

>>>>>>> 67e4431 (save a empty file before move to another branch)
