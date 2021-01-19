/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// 60/60 cases passed (80 ms)
// Your runtime beats 85.92 % of typescript submissions
// Your memory usage beats 74.65 % of typescript submissions (40.1 MB)
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null) {
        return true;
    }
    if(p !== null && q !== null && p.val === q.val){
        const leftResult:boolean =   isSameTree(p.left, q.left);
        const rightResult: boolean = isSameTree(p.right, q.right);
        return leftResult && rightResult;
    }
    return p !== null && q !== null && p.val === q.val;
};
// @lc code=end

