/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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
// [1,2,3,4]
// round1 : [2,1,3,4];
//TODO 
function swapPairs(head: ListNode | null): ListNode | null {
    if(head.next === null) {
        return head;
    }
    let quick = head.next;
    let slow = head;
    while(quick !== null){
        // 3
        const nextSlow = slow.next.next;
        //4
        const nextQuick = quick.next.next;
        // 2 --> 1
        quick.next = slow;
        // 1 ---> 3
        slow.next = nextSlow;
    }
};
// @lc code=end

