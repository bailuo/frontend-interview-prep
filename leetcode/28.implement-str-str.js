/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

/* Accepted
78/78 cases passed (72 ms)
Your runtime beats 95.39 % of javascript submissions
Your memory usage beats 51.14 % of javascript submissions (39 MB)
time complicity is O(n2) */
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // length of substring
    const needleLength = needle.length;
    const haystackLength = haystack.length;
    if (!needle) {
        return 0;
    }
    if (haystackLength < needleLength) {
        return -1;
    }
    // the last position we need to check
    const endPointer = haystackLength - needleLength;
    let haystackPointer = 0;
    while (haystackPointer <= endPointer) {
        let needlePointer = needleLength - 1;
        if (haystack[haystackPointer] !== needle[0]) {
            haystackPointer++;
            continue;
        }
        // run from last position of needle and compare
        while (needlePointer >= 0 && haystack[haystackPointer + needlePointer] === needle[needlePointer]) {
            needlePointer--;
        }
        // if the position of needle pointer is -11, it means, the substr and needle match
        if (needlePointer === -1) {
            return haystackPointer;
        }
        // if the needle and the substr do not match, we go to next round
        haystackPointer++;
    }
    return -1;
};
// @lc code=end
