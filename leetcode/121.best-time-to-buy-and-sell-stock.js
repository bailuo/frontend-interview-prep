/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
// Accepted
// 211/211 cases passed (4903 ms)
// Your runtime beats 5.15 % of javascript submissions
// Your memory usage beats 85.65 % of javascript submissions (48.6 MB)
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    let max = 0;
    const priceMap = {};
    for (let left = 0; left < len; left++) {
        let right = len - 1;
        const leftPrice = prices[left];
        if (priceMap[leftPrice] !== undefined) {
            continue;
        }
        if (left > 0 && leftPrice >= prices[left - 1]) {
            continue;
        }
        while (left < right) {
            const rightPrice = prices[right];
            if (right < len - 1 && rightPrice <= prices[right + 1]) {
                right--;
                continue;
            }
            if (leftPrice < rightPrice) {
                max = Math.max(max, rightPrice - leftPrice);
            }
            right--;
        }
        priceMap[leftPrice] = max;
    }
    return max;
};
// @lc code=end
