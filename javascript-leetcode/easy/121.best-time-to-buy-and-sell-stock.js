/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            continue;
        }
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }
    return maxProfit;
};
// @lc code=end

// Accepted
// 211/211 cases passed (144 ms)
// Your runtime beats 21.81 % of javascript submissions
// Your memory usage beats 38.13 % of javascript submissions (51.8 MB)
