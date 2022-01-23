/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/* Accepted
 * 987/987 cases passed (157 ms)
 * Your runtime beats 49.18 % of javascript submissions
 * Your memory usage beats 84 % of javascript submissions (42.5 MB)
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charSet = new Set();
    const len = s.length;
    let fast = -1;
    let ans = 0;
    for (let slow = 0; slow < len; slow++) {
        /*
         * when move from a character to the next, remove
         * the character from the chaSet
         **/
        if (slow !== 0) {
            charSet.delete(s.charAt(slow - 1));
        }
        while (fast + 1 < len && !charSet.has(s.charAt(fast + 1))) {
            charSet.add(s.charAt(fast + 1));
            fast++;
        }
        ans = Math.max(ans, fast - slow + 1);
    }
    return ans;
};

// @lc code=end
