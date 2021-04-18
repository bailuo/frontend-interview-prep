/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    return walk(slow, fast);
};
function walk(slow, fast) {
    if (!fast || !fast.next) {
        return false;
    }
    if (fast === slow) {
        return true;
    }
    slow = slow.next;
    fast = fast.next.next;
    return walk(slow, fast);
}
// @lc code=end

// Accepted
// 19/19 cases passed (88 ms)
// Your runtime beats 63.34 % of javascript submissions
// Your memory usage beats 24.52 % of javascript submissions (41.5 MB)
