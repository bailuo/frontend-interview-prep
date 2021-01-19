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
// Use two pointers, fast and slow. 
// The tricky part is to recognize the two pointers would eventually meet, provided they are in a circle
function hasCycle(head: ListNode | null): boolean {
    let fastPointer = head;
    let slowPointer = head;
    // there is no need to check the slow pointer, because we already checked before
    while(fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;

        if(fastPointer === slowPointer) {
            return true;
        }
        return false;
    }
};
// @lc code=end

