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
    return maxProfixMinPrice(prices);
};
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfixBrutal(prices) {
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
        // calculate price gap between the left and any elements on the right
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
}
// Accepted
// 211/211 cases passed (116 ms)
// Your runtime beats 30.07 % of javascript submissions
// Your memory usage beats 34.48 % of javascript submissions (48.9 MB)
// offocial solution
function maxProfixMinPrice(prices) {
    const arrLength = prices.length;
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < arrLength; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            continue;
        }
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}
// @lc code=end
