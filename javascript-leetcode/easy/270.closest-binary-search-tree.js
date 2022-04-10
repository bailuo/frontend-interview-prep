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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    return closestValueHelper(root, target, Number.MAX_VALUE);
};

function closestValueHelper(root, target, closestVal) {
    if (!root) {
        return closestVal;
    }
    if (root.val === target) {
        return root.val;
    }
    const currentGap = Math.abs(target - root.val);
    const currentClosestGap = Math.abs(target - closestVal);
    root.val = currentClosestGap > currentGap ? root.val : closestVal;
    if (root.left) {
        const leftVal = closestValueHelper(root.left, target, root.val);
        root.val = Math.abs(target - leftVal) > currentGap ? root.val : root.left.val;
    }
    if (root.right) {
        const rightVal = closestValueHelper(root.right, target, root.val);
        root.val = Math.abs(target - rightVal) > currentGap ? root.val : root.right.val;
    }
    return root.val;
}
