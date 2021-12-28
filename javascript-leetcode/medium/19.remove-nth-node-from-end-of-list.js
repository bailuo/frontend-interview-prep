/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  Accepted
//  208/208 cases passed (125 ms)
//  Your runtime beats 8.89 % of javascript submissions
//  Your memory usage beats 92.53 % of javascript submissions (39.8 MB)
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head;
    let slow = head;
    let fastIndex = 0;
    let slowIndex = 0;
    if (!head || !head.next) {
        return null;
    }
    while (fast.next) {
        fast = fast.next;
        fastIndex++;
    }
    const targetNodeIndex = fastIndex - n + 1;
    // stop at the node before the target node
    while (slowIndex < targetNodeIndex - 1) {
        slow = slow.next;
        slowIndex++;
    }
    if (slowIndex === 0 && targetNodeIndex === 0) {
        return slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
// @lc code=end
