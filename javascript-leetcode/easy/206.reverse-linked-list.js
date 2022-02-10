/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
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
/*
 * Accepted
 * 28/28 cases passed (96 ms)
 * Your runtime beats 49.45 % of javascript submissions
 *Your memory usage beats 9.29 % of javascript submissions (44.3 MB) */
var reverseList = function (head) {
    if (!head) {
        return null;
    }
    let previous = null;
    // make a reference to head
    let current = head;
    while (current) {
        // next to head
        const next = current.next;
        // the next of the reference is previous, for first round, it is null
        current.next = previous;
        // previous pointer to current
        previous = current;
        // current point to the next
        current = next;
    }
    // when we finish, current is null, and previous is the tail of the original NodeList
    return previous;
};
// @lc code=end
