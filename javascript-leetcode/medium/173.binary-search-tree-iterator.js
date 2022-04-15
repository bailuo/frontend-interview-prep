/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 */

const { HighlightSpanKind } = require('typescript');

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
 */
var BSTIterator = function (root) {
    this.arr = [];
    this.index = 0;
    this.inorder(root, this.arr);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.arr[this.index++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.index < this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
BSTIterator.prototype.inorder = function (root, arr) {
    if (!root) {
        return;
    }
    //left
    root.left && this.inorder(root.left, arr);
    // root
    arr.push(root.val);
    //right
    arr.right && this.inorder(root.right);
};
// @lc code=end
