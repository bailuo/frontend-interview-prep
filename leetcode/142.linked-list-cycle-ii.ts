/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// To answer this question, not only need we know if the cycle exists
// but we also need to find the break pointer, so we do not fall into an dead loop
// one challenge is that we cannot modify the original list, so we cannot add further marks to the list or the nodes of it
// 16/16 cases passed (92 ms)
// Your runtime beats 87.01 % of typescript submissions
// Your memory usage beats 54.55 % of typescript submissions (42 MB)
function detectCycle(head: ListNode | null): ListNode | null {
    if(!head){
        return null;
    }
    let node: ListNode | null = head;
    const reached = new Set();
    while(node !== undefined && node !== null){
        if(reached.has(node)){
            return node;
        }
        reached.add(node);
        node = node.next;
    }
    return null;
};
// @lc code=end

