/*
 * @lc app=leetcode id=2000 lang=javascript
 *
 * [2000] Reverse Prefix of Word
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    return reversePrefixArr(word, ch);
};
/*
 *Accepted
 * 112/112 cases passed (103 ms)
 * Your runtime beats 28.14 % of javascript submissions
 * Your memory usage beats 5.7 % of javascript submissions (42.3 MB)
 * */
function reversePrefixForwards(word, ch) {
    let slow = 0;
    let fast = -1;
    if (word.length < 2) {
        return word;
    }
    let str = '';
    while (fast < word.length - 1) {
        fast++;
        // find the first index of the char
        if (word.charAt(fast) === ch && slow > -1) {
            slow = fast;
            // add chars from the index
            while (slow >= 0) {
                str += word.charAt(slow);
                slow--;
            }
            continue;
        }
        if (slow >= 0) {
            continue;
        }
        str += word.charAt(fast);
    }
    // if the str is empty, it means there is no ch in this word, so ,just return the word itself
    return str === '' ? word : str;
}
/*
 * Accepted
 * 112/112 cases passed (64 ms)
 * Your runtime beats 96.96 % of javascript submissions
 * Your memory usage beats 5.7 % of javascript submissions (42.3 MB) */
function reversePrefixArr(word, ch) {
    const firstIndex = word.indexOf(ch);
    if (firstIndex === -1 || firstIndex === 0) {
        return word;
    }
    const arr = word.split('');
    let left = 0;
    let right = firstIndex;
    while (left < right) {
        const temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right--;
    }
    return arr.join('');
}
// @lc code=end
