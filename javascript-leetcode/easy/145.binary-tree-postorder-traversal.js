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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    return postOrderTraversalHelper(root);
};

function postOrderTraversalHelper(root) {
    if (!root) {
        return [];
    }
    const { left, right } = root;
    if (!left && !right) {
        return [root.val];
    }
    return postOrderTraversalHelper(left).concat(postOrderTraversalHelper(right)).concat([root.val]);
}
