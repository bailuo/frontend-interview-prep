/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

/* One requirement to this problem is not to use extra space for another Array, and we can only modify the original one.

A simple way is to use indexOf and filter feature in javascript/typescript, since indexOf only returns the first index of a element, such as 

function removeDuplicates(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    nums = nums.filter((_num: number, _index: number) => {
        return nums.indexOf(_num) === _index;
    });
    return nums.length;
}


similar ways has it that using set and Array.from


however, filter use extra space to store new array before we assign it back to nums. Hence, we have to try another approach, then I tried two pointer solution, as following, but the problem is that time complicity can go up to O(n^2)

*/

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const len: number = nums.length;
    let slow: number = 0;
    if (len < 2) {
        return len;
    }

    while (slow < len && nums[slow] !== undefined) {
        if (nums[slow] !== nums[slow + 1]) {
            slow++;
            continue;
        }
        let quick = slow + 1;
        while (quick < len && nums[quick] !== undefined) {
            if (nums[quick] === nums[quick + 1]) {
                quick++;
                continue;
            }
            nums[slow + 1] = nums[quick + 1];
            slow++;
            quick++;
        }
    }
    nums.splice(slow);
    return slow + 1;
}
/* Accepted
161/161 cases passed (96 ms)
Your runtime beats 82.47 % of typescript submissions
Your memory usage beats 79.73 % of typescript submissions (41.5 MB) */
// @lc code=end
