/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
//  Accepted
//  200/200 cases passed (116 ms)
//  Your runtime beats 12.81 % of javascript submissions
//  Your memory usage beats 68.85 % of javascript submissions (40.3 MB)
var maxProfit = function (prices) {
    return maxProfitRewirtten(prices);
};
// my rewritten solution
function maxProfitRewirtten(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const toAdd = prices[i] - prices[i - 1] > 0 ? prices[i] - prices[i - 1] : 0;
        maxProfit += toAdd;
    }
    return maxProfit;
}
// offical solution from leetcode.com
function maxProfitOfficial(prices) {
    const len = prices.length;
    let peak = prices[0];
    let valley = prices[0];
    let maxProfit = 0;
    while (i < len - 1) {
        while (i < len - 1 && prices[i] >= prices[i + 1]) {
            i++;
        }
        valley = prices[i];
        while (i < len - 1 && prices[i] <= prices[i + 1]) {
            i++;
        }
        peak = prices[i];
        maxProfit += peak - valley;
    }
    return maxProfit;
}
// @lc code=end
