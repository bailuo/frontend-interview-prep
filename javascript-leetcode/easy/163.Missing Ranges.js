// leetcode problem selected-200_easy
/* Description
163. Missing Ranges
You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]
Explanation: The ranges are:
[2,2] --> "2"
[4,49] --> "4->49"
[51,74] --> "51->74"
[76,99] --> "76->99"
Example 2:

Input: nums = [-1], lower = -1, upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.
 

Constraints:

-109 <= lower <= upper <= 109
0 <= nums.length <= 100
lower <= nums[i] <= upper
All the values of nums are unique.
 */
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
    if (!nums.length) {
        return lower === upper ? [lower.toString()] : [`${lower}->${upper}`];
    }
    let result = [];
    let current = nums.shift();
    // set both slow and fast to be the lower end
    let fast = lower;
    let slow = lower;
    while (undefined !== current) {
        // if fast is smaller than the number before current, set fast to it as the temporary end
        if (fast < current - 1) {
            fast = current - 1;
        }
        // if slow equals the current, it means that the the current equals to the lower end, so, we should ignore this and continue our work
        if (slow !== current) {
            result = getAddedResult(slow, fast, result);
        }
        // since we have done the slow to current/fast range, we start from the next number of current
        slow = current + 1;
        fast = current + 1;
        // change current to be the next number in the nums, which set another higher end
        current = nums.shift();
    }
    // it is possible that after the loop above, the fast is still no more than upper, and the slow is still the next number of current from last round
    // so, we need to take care of this case
    if (fast <= upper) {
        result = getAddedResult(slow, upper, result);
    }
    return result;
};

function getAddedResult(lower, higher, arr) {
    if (higher === lower) {
        arr.push(lower.toString());
    } else {
        arr.push(`${lower}->${higher}`);
    }
    return arr;
}

/* Accepted
 * 38/38
 *执行用时：60 ms, 在所有 JavaScript 提交中击败了 96.72% 的用户
 *内存消耗：37.9 MB ,在所有 JavaScript 提交中击败了 14.76% 的用户
 */
