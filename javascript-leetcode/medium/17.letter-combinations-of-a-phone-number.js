/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const KEY_MAP = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['x', 'w', 'y', 'z'],
        '*': '',
        0: '',
        1: '',
    };
    const digitsChars = digits.toString().split('');
    return digitsChars.reduce((accu, _digitalChar) => {
        return merge(accu, KEY_MAP[_digitalChar]);
    }, []);
};

function merge(arr1, arr2) {
    const result = [];
    if (!arr1.length) return arr2;
    if (!arr2.length) return arr1;
    for (const char1 of arr1) {
        for (const char2 of arr2) {
            result.push(`${char1}${char2}`);
        }
    }
    return result;
}
// @lc code=end
