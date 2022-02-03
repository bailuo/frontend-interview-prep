/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/* Accepted
 * 106/106 cases passed (4433 ms)
 * Your runtime beats 11.08 % of javascript submissions
 * Your memory usage beats 5 % of javascript submissions (112.6 MB) */
var checkInclusion = function (s1, s2) {
    let slow = 0;
    let fast = -1;
    if (!s1) {
        return true;
    }
    if (s2.length < s1.length) {
        return false;
    }
    // get all characters of s1 in the map
    const s1Map = s1.split('').reduce((accu, curr) => {
        accu[curr] = undefined === accu[curr] ? 1 : accu[curr] + 1;
        return accu;
    }, {});
    // make substring of s2 and check if the substring has all characters of s1
    while (fast < s2.length) {
        // the substring should be as long as s1, the fast pointer move right
        fast = fast < s1.length - 1 ? s1.length - 1 : fast + 1;
        // if the length is more than s1.length, shrink the left border of s2 substring
        if (fast - slow + 1 > s1.length) {
            slow += 1;
        }
        // generate the charachter map of s2 substring
        const tempMap = s2
            .substring(slow, fast + 1)
            .split('')
            .reduce((accu, curr) => {
                accu[curr] = undefined === accu[curr] ? 1 : accu[curr] + 1;
                return accu;
            }, {});
        // compare the two maps, if equal, return true
        if (hashCompare(s1Map, tempMap) === true) {
            return true;
        }
    }
    return false;
};
// the comparte function
function hashCompare(map1, map2) {
    for (const key in map1) {
        if (undefined === map2[key] || map1[key] !== map2[key]) {
            return false;
        }
    }
    return true;
}
// @lc code=end
