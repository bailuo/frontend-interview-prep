/*
 * @lc app=leetcode id=20 lang=typescript
 * 
 * [20] Valid Parentheses
 */

// @lc code=start
// use stack for this kind of challenges
function isValid(s: string): boolean {
    const inputs: string[] = ['(', '[', '{'];
    const stack:string[]  = [];
    const len:number = s.length;
    let index:number = 0;
    while(index < len){
        const char = s[index];
        index++;
        if(inputs.indexOf(char) > -1){
            stack.push(char);
            continue;
        }
        if(!stack.length){
            return false;
        }
        const top: string = stack[stack.length -1];
        if(char === ')' && top !== '('){
            return false;
        }
        if(char === ']' && top !== '['){
            return false;
        }
        if(char === '}' && top !== '{'){
            return false;
        }
        stack.pop();
    }
    return stack.length === 0
};
// @lc code=end

