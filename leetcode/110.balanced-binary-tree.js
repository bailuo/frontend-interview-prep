/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
// 平衡二叉树成立条件，左右高度差不能大于1且子树需要同时为平衡二叉树

// top to boyyom
var isBalanced = function (root) {
    // return isBalancedTopToBottom(root);
    return isBalancedBottomToTop(root) !== -1;
};
/* 
Accepted
228/228 cases passed (168 ms)
Your runtime beats 5.04 % of javascript submissions
Your memory usage beats 15.61 % of javascript submissions (43.8 MB) */

function isBalancedTopToBottom(root) {
    if (!root) {
        return true;
    }
    // df = [height of left child - height 0f right child]
    const df = Math.abs(calculateTreeHeight(root.left) - calculateTreeHeight(root.right));
    const isSubTreeValid = isBalanced(root.left) && isBalanced(root.right);
    return df <= 1 && isSubTreeValid;
}

function calculateTreeHeight(node) {
    if (!node) {
        return 0;
    }
    return Math.max(calculateTreeHeight(node.left), calculateTreeHeight(node.right)) + 1;
}
/* 

Accepted
228/228 cases passed (100 ms)
Your runtime beats 31.32 % of javascript submissions
Your memory usage beats 75.59 % of javascript submissions (43 MB) */
function isBalancedBottomToTop(root) {
    if (!root) {
        return 0;
    }
    const left = isBalancedBottomToTop(root.left);
    const right = isBalancedBottomToTop(root.right);
    //return early if we found a non-balanced subtree
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
}
// @lc code=end
