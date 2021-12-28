/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    if (x < 100) {
        return x % 11 === 0;
    }
    const arr: string[] = x.toString().split('');
    let left: number = Math.floor(arr.length / 2) - 1;
    let right: number = arr.length % 2 === 0 ? left + 1 : left + 2;
    while (left > -1) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
};
// @lc code=end

