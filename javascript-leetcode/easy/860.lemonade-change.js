/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveCount = 0;
    let tenCount = 0;
    for (let i = 0; i < bills.length; i++) {
        const change = bills[i] - 5;
        if (fiveCount < 0 || tenCount < 0) {
            return false;
        }
        if (change === 0) {
            fiveCount++;
            continue;
        }
        if (change === 5) {
            tenCount++;
            fiveCount--;
            continue;
        }
        tenCount--;
        fiveCount--;
        if (tenCount < 0) {
            fiveCount -= 2;
            tenCount++;
        }
    }
    return fiveCount >= 0 && tenCount >= 0;
};
// @lc code=end

/* 
Accepted
60/60 cases passed (145 ms)
Your runtime beats 25.64 % of javascript submissions
Your memory usage beats 43.59 % of javascript submissions (50.8 MB) */
