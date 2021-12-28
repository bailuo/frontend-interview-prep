/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
// two pointers
function isPalindrome(s: string): boolean {
     const pureStr: string = s.replace( /[^A-Za-z0-9]/g, '').toLowerCase();
     let end: number = pureStr.length - 1;
     let start: number = 0;
     while(start < end){
         if(pureStr[start] !== pureStr[end]) {
             return false;
         }
         start ++;
         end --;
     }
     return true;
};
// @lc code=end

