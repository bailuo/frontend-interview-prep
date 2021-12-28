/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    return jumpGreed(nums);
};
/*
 * Accepted
 * 166/166 cases passed (4544 ms)
 * Your runtime beats 5.02 % of javascript submissions
 * Your memory usage beats 5.16 % of javascript submissions (58.5 MB)
 */
function jumpBrutal(nums) {
    const cache = {};
    const length = nums.length;
    const desinationIndex = length - 1;
    if (length === 1) {
        return true;
    }
    for (let currentIndex = desinationIndex - 1; currentIndex >= 0; --currentIndex) {
        /*
         *  if we can jump to the end from a certain position, we cache it to
         *  be true,
         *  if we build a route from the 0 index, then it is true
         */
        if (nums[currentIndex] >= desinationIndex - currentIndex) {
            cache[currentIndex] = true;
            continue;
        }
        /*
         * next time we are at a position which we can jump to this
         * certain index we just cached, we also cache to be true
         */
        const nextMaxStep = nums[currentIndex] + currentIndex;
        for (const idx in cache) {
            if (nextMaxStep >= idx) {
                cache[currentIndex] = true;
                break;
            }
        }
    }
    return cache[0] === true;
}
/* Accepted
 * 166/166 cases passed (88 ms)
 * Your runtime beats 75.46 % of javascript submissions
 * Your memory usage beats 59.83 % of javascript submissions (43 MB)
 * */
function jumpGreed(nums) {
    const length = nums.length;
    let indicator = length - 1;
    let index = indicator - 1;
    if (length === 1) {
        return true;
    }
    while (index > 0) {
        if (nums[index] >= indicator - index) {
            indicator = index;
            index = indicator - 1;
            continue;
        }
        index--;
    }
    return nums[index] >= indicator;
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end
