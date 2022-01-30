/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const s1Arr = s1.split(' ').sort();
    const s2Arr = s2.split(' ').sort();
    const wordMap = {};
    const result = [];
    s1Arr.forEach((_word) => {
        wordMap[_word] = undefined === wordMap[_word] ? 1 : wordMap[_word] + 1;
    });
    s2Arr.forEach((_word) => {
        wordMap[_word] = undefined === wordMap[_word] ? 1 : wordMap[_word] + 1;
    });
    for (let _word in wordMap) {
        if (wordMap[_word] === 1) {
            result.push(_word);
        }
    }
    return result;
};
// @lc code=end
/*
 * Accepted
 * 55/55 cases passed (116 ms)
 * Your runtime beats 20.34 % of javascript submissions
 * Your memory usage beats 5.65 % of javascript submissions (42.5 MB) */
