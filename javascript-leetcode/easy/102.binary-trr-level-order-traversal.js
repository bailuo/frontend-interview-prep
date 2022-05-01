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
 * @return {number[][]}
 */
// BFS solution
var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let pointer = -1;
    const levelQueue = [[root]];
    const resultQueue = [[root.val]];
    while (++pointer < levelQueue.length) {
        const srcQueue = levelQueue[pointer];
        const newLevel = [];
        const newLevelResult = [];
        while (srcQueue.length) {
            const ele = srcQueue.shift();
            if (ele.left) {
                newLevel.push(ele.left);
                newLevelResult.push(ele.left.val);
            }
            if (ele.right) {
                newLevel.push(ele.right);
                newLevelResult.push(ele.right.val);
            }
        }
        if (newLevel.length) {
            levelQueue.push(newLevel);
            resultQueue.push(newLevelResult);
        }
    }
    return resultQueue;
};
