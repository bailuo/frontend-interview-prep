/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
    let fastPointer = head;
    let slowPointer = head;
    while(fastPointer.next && slowPointer) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;

        if(fastPointer === slowPointer) {
            return true;
        }
        return false;
    }
};
// @lc code=end

