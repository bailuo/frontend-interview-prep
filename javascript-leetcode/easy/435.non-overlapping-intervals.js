/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */
// hynamic programming, exceed max time limit
const eraseOverlapIntervals1 = function (intervals) {
    // intervals = intervals.filter((_i) => _i[0] >=0)
    if (!intervals.length) return 0;
    // sort the intervals by the start end
    intervals.sort((a, b) => a[0] - b[0]);
    const intervalLength = intervals.length;
    // if there is no intervals, then return 0
    const f = new Array(intervalLength).fill(1);
    for (let i = 1; i < intervalLength; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
    }
    return intervalLength - Math.max(...f);
};

const eraseOverlapIntervals2 = (intervals) => {
    if (!intervals.length) {
        return 0;
    }
    intervals.sort((a, b) => a[1] - b[1]);
    const len = intervals.length;
    let right = intervals[0][1];
    let ans = 1;
    for (let i = 1; i < len; ++i) {
        if (intervals[i][0] < right) {
            continue;
        }
        ans++;
        right = intervals[i][1];
    }
    return len - ans;
};
// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    return eraseOverlapIntervals2(intervals);
};
// @lc code=end
