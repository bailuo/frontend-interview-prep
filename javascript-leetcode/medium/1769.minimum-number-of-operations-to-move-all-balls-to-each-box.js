/*
 * @lc app=leetcode id=1769 lang=javascript
 *
 * [1769] Minimum Number of Operations to Move All Balls to Each Box
 */

// @lc code=start
const brutalForce = (boxs) => {
    const len = boxs.length;
    const result = [];
    for (let target = 0; target < len; target++) {
        let ans = 0;
        for (let from = 0; from < len; from++) {
            ans += boxs[from] === '0' ? 0 : Math.abs(from - target);
        }
        result[target] = ans;
    }
    return result;
};

const optimized = (boxs) => {
    let right = 0;
    let operations = 0;
    let left = boxs[0].charCodeAt() - '0'.charCodeAt();
    for (let i = 1; i < boxs.length; i++) {
        if (boxs[i] === '1') {
            right++;
            operations += i;
        }
    }
    const res = [];
    res.push(operations);
    for (let i = 1; i < boxs.length; i++) {
        operations = operations + left - right;
        if (boxs[i] === '1') {
            left++;
            right--;
        }
        res.push(operations);
    }
    return res;
};
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    return optimized(boxes);
};
// @lc code=end
