/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const peers: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    const peer: number = target - nums[i];
    if (peers[nums[i]] !== undefined) {
      return [peers[nums[i]], i];
    }
    peers[peer] = i;
  }
  return [];
}
// @lc code=end
