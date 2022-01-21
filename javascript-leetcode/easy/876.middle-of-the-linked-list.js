/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/* Accepted
 * 36/36 cases passed (114 ms)
 * Your runtime beats 12.13 % of javascript submissions
 * Your memory usage beats 64.26 % of javascript submissions (38.7 MB) */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    let slow = head;
    let fast = head;
    // fast pointer moves two times fast as the slow one
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
// @lc code=end
