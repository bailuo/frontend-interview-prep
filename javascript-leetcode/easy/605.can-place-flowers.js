/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    return canPlantFlowersSimple(flowerbed, n);
};
/* Accepted
 * 124/124 cases passed (130 ms)
 * Your runtime beats 16.44 % of javascript submissions
 * Your memory usage beats 92.01 % of javascript submissions (40.4 MB)
 * */
const canPlantFlowersSimple = function (flowerbed, n) {
    let planted = 0;
    for (let index = 0; index < flowerbed.length; index++) {
        if (flowerbed[index] === 1 || flowerbed[index + 1] === 1 || flowerbed[index - 1] === 1) {
            continue;
        }
        planted++;
        if (planted >= n) {
            break;
        }
        flowerbed[index] = 1;
    }
    return planted >= n;
};

const canPlantFlowersDP = function (flowerbed, n) {};
// @lc code=end
