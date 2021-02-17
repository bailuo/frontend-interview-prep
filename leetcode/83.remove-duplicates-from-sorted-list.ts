/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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
/* 
Accepted
165/165 cases passed (96 ms)
Your runtime beats 65.52 % of typescript submissions
Your memory usage beats 67.82 % of typescript submissions (41.1 MB) */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;
    while (fast !== null) {
        if (slow.val !== fast.val) {
            slow.next = fast;
            fast = fast.next;
            slow = slow.next;
            continue;
        }
        fast = fast.next;
        slow.next = fast;
    }
    return head;
}

// @lc code=end
