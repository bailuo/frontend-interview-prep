/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/*
 * Two Pointers
 * Accepted
 * 29/29 cases passed (192 ms)
 * Your runtime beats 5.07 % of javascript submissions
 * Your memory usage beats 13.87 % of javascript submissions (45.9 MB)
 * */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s
        .split(' ')
        .map((_word) => {
            let left = Math.floor(_word.length / 2) - 1;
            let right = _word.length % 2 === 0 ? left + 1 : left + 2;
            let _reversedWord = _word.length % 2 === 0 ? '' : _word[left + 1];
            while (left >= 0) {
                _reversedWord = _word[right] + _reversedWord;
                _reversedWord += _word[left];
                left--;
                right++;
            }
            return _reversedWord;
        })
        .join(' ');
};
// @lc code=end
