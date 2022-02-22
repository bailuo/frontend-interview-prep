/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
    return swapPairsHelper(head);
};
/* Accepted
55/55 cases passed (68 ms)
Your runtime beats 81.51 % of javascript submissions
Your memory usage beats 37.12 % of javascript submissions (42.1 MB) */
function swapPairsHelper(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    const slow = head;
    const fast = head.next;
    const nextHead = slow.next.next;
    fast.next = slow;
    slow.next = swapPairsHelper(nextHead, slow);
    return fast;
}
// @lc code=end
