/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
/*
 * Accepted
 * 123/123 cases passed (68 ms)
 * Your runtime beats 96.92 % of javascript submissions
 * Your memory usage beats 7.17 % of javascript submissions (43 MB)
 * */
var longestCommonPrefix = function (strs) {
    strs.sort((_a, _b) => _a.length - _b.length);
    const word = strs.shift();
    // const wordArr = word.split('');
    let pointer = 0;
    while (pointer < word.length) {
        const char = word.charAt(pointer);
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            if (str.charAt(pointer) !== char) {
                return word.substring(0, pointer);
            }
        }
        pointer++;
    }
    return word;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end
