/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // if one list is null, just return the other
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    // build a new node as the head node, we can return the next node of list one
    let head = new ListNode(0);
    // initialize the tail as the head
    let tail = head;
    // set two pointers
    let node1 = list1;
    let node2 = list2;
    // head next is tail, and we change the tail every time
    head.next = tail;
    while (node1 || node2) {
        // prepare the next node
        if (!node1) {
            tail.next = node2;
            break;
        }
        if (!node2) {
            tail.next = node1;
            break;
        }
        // compare values
        if (node1.val <= node2.val) {
            tail.next = node1;
            node1 = node1.next;
        } else {
            tail.next = node2;
            node2 = node2.next;
        }
        // for each loop, tail is the next next node
        tail = tail.next;
    }
    return head.next;
};
// @lc code=end
/*
 * Accepted
 * 208/208 cases passed (64 ms)
 * Your runtime beats 99.89 % of javascript submissions
 * Your memory usage beats 5.02 % of javascript submissions (44.5 MB)
 * */
