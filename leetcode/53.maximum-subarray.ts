/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// Accepted
// 203/203 cases passed (80 ms)
// Your runtime beats 97.65 % of typescript submissions
// Your memory usage beats 72.82 % of typescript submissions (40.3 MB)
/* Kadane's algorithm
   the tricky part is to use the end of each sub-array as the pinpoint
   let's say we have an array [a,b,c,d]
   we know the sum of [a, b] is a + b, ad when we check out the sum of [a, b ,c ], we can use the result we already know
 */
// @lc code=start
function maxSubArray(nums: number[]): number {
    // if there is no element, the result is 0
    if (nums.length === 0) {
        return 0;
    }
    // now let's get into general situation
    let max = nums[0];
    let curr = max;
    // remember we only go through this process one time only
    for (let i = 1; i < nums.length; i++) {
        /*   this following two lines are the most important part of this algorithm
         "nums[i]" is the current tail, and "nums[i] + curr" is the current sum。
         assume we have [a, b, c, d, e]
         case 1:  b >= a+b ---> b
         case 2:  b < a+b ----> a+b
         then we go to next round, and keep the result as new curr */
        curr = Math.max(nums[i], nums[i] + curr);
        // this line is easy to understand, we always keep the max result
        max = Math.max(max, curr);
    }
    return max;
}
// @lc code=end
