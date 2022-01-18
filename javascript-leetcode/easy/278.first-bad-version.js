/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
/*
 * 22/22 cases passed (99 ms)
 * Your runtime beats 32.07 % of javascript submissions
 * Your memory usage beats 78.85 % of javascript submissions (38.4 MB) */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let startVersion = 1;
        let endVersion = n;
        while (startVersion < endVersion) {
            if (endVersion - startVersion < 2) {
                return isBadVersion(startVersion) ? startVersion : endVersion;
            }
            const midVersion = Math.floor((startVersion + endVersion) / 2);
            if (isBadVersion(midVersion)) {
                endVersion = midVersion;
                continue;
            }
            startVersion = midVersion;
        }
        return startVersion;
    };
};
// @lc code=end
