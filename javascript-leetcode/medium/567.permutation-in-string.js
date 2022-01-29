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
// exceed of time limits
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
    const s1Map = s1.split('').reduce((accu, curr) => {
        accu[curr] = undefined === accu[curr] ? 1 : accu[curr] + 1;
        return accu;
    }, {});
    while (fast < s2.length) {
        fast = fast < s1.length - 1 ? s1.length - 1 : fast + 1;
        if (fast - slow + 1 > s1.length) {
            slow += 1;
        }
        const tempMap = s2
            .substring(slow, fast + 1)
            .split('')
            .reduce((accu, curr) => {
                accu[curr] = undefined === accu[curr] ? 1 : accu[curr] + 1;
                return accu;
            }, {});
        if (hashCompare(s1Map, tempMap) === true) {
            return true;
        }
    }
    return false;
};

function hashCompare(map1, map2) {
    for (const key in map1) {
        if (undefined === map2[key] || map1[key] !== map2[key]) {
            return false;
        }
    }
    return true;
}
// @lc code=end
