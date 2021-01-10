/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    return mergeListLoopFunc(l1, l2);
    // return mergeListInteratorFunc(l1, l2);
}

// easy to understand, save memory, but cost O(m+n) runtime
// 208/208 cases passed (92 ms)
// Your runtime beats 81.58 % of typescript submissions
// Your memory usage beats 93.57 % of typescript submissions (40.7 MB)
function mergeListLoopFunc(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const head: ListNode | null = findSmaller(l1, l2);
    let currHead: ListNode | null = head;
    while (l1 && l2) {
        // use to compare
        const nextCandidate: ListNode | null = currHead === l1 ? l1.next : l2.next;
        if (currHead === l1) {
            l1 = l1.next;
            currHead.next = findSmaller(nextCandidate, l2);
        } else if (currHead === l2) {
            l2 = l2.next;
            currHead.next = findSmaller(l1, nextCandidate);
        }
        currHead = currHead.next;
    }
    return head;
}
// iteration solution
// 208/208 cases passed (88 ms)
// Your runtime beats 92.11 % of typescript submissions
// Your memory usage beats 52.05 % of typescript submissions (40.9 MB)
function mergeListInteratorFunc(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const curr: ListNode | null = findSmaller(l1, l2);
    // this is the baseline
    if(!curr) {
        return null;
    }
    if (curr === l1) {
        l1 = l1.next || null;
    } else {
        l2 = l2.next || null;
    }
    curr.next = mergeListInteratorFunc(l1, l2);
    return curr || null;
}


function findSmaller(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1 && !l2) {
        return null;
    }
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    return l2.val >= l1.val ? l1 : l2;
}

// @lc code=end
