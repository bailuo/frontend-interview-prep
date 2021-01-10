/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// 123/123 cases passed (84 ms)
// Your runtime beats 85.77 % of typescript submissions
// Your memory usage beats 43.09 % of typescript submissions (40.9 MB)

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if(!strs || !strs.length){
        return '';
    }
    const word: string = strs.shift();
    const wordLength:number = word.length;
    let maxLength:number = wordLength;
    let charIndex:number = 0
    while(charIndex < maxLength) {
        for(let wordIndex: number = 0 ; wordIndex < strs.length; wordIndex ++){
            // if the word for comparision is shorter than the shared prefix cannot be longer than that
            const comparisonWord: string = strs[wordIndex];
            maxLength = Math.min(maxLength, comparisonWord.length);
            if(charIndex >= maxLength) {
                return word.substring(0, maxLength);
            }
            if(word[charIndex] !== comparisonWord[charIndex]){
               return word.substring(0, charIndex);     
            }
        }
        charIndex ++ ;
    }
    return word.substring(0, charIndex);
};
// @lc code=end

