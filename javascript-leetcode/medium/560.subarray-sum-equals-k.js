/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
const subarraySum1 = (nums, k) => {
    const len = nums.length;
    let ans = 0;
    for (let start = 0; start < len; ++start) {
        let sum = 0;
        for (let end = start; end >= 0; --end) {
            sum += nums[end];
            if (sum === k) {
                ans++;
            }
        }
    }
    return ans;
};

const subarraySum2 = (nums, k) => {
    const len = nums.length;
    // index and preSum
    const map = new Map();
    let count = 0;
    let preSum = 0;
    map.set(0, 1);
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        preSum += num;
        if (map.has(preSum - k)) {
            count += map.get(preSum - k);
        }
        if (map.has(preSum)) {
            map.set(preSum, map.get(preSum) + 1);
        } else {
            map.set(preSum, 1);
        }
    }
    return count;
};
/**
 * @param {string} s
 * @return {boolean}
 */
const subarraySum = function (nums, k) {
    return subarraySum2(nums, k);
};

// @lc code=end
