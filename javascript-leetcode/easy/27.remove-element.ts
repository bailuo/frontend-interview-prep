/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let endPointer: number = nums.length - 1;
    let startPoiter: number = 0;
    while (startPoiter <= endPointer) {
        if (nums[startPoiter] !== val) {
            startPoiter++;
            continue;
        }
        /* if the number from the backsie is also the value, we just ignore it and process to the number located before it */
        if (nums[endPointer] === val) {
            endPointer--;
            continue;
        }
        nums[startPoiter] = nums[endPointer];
        nums[endPointer] = val;
        startPoiter++;
        endPointer--;
    }
    return startPoiter || 0;
}
// @lc code=end

/* the key point is not to use extra space, so a simple way is to swap location of two elements if we find a target from the start side */

/* 
Accepted
113/113 cases passed (80 ms)
Your runtime beats 84.94 % of typescript submissions
Your memory usage beats 55.45 % of typescript submissions (40.3 MB) 
*/
