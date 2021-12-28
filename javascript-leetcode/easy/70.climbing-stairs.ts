/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
// classical climb stairs question, use simple recurisive solution
function climbStairs(n: number): number {
    if(n<= 2){
        return n;
    }
    const records:Map<number, number> = new Map();
    return climbSteps(n-1, records) + climbSteps(n-2, records);
};

function climbSteps(n: number, records: Map<number, number>): number {
    if(n<= 2){
        return n;
    }
    if(records[n] !== undefined){
        return records[n]
    }
    records[n-1] = climbSteps(n-1, records);
    records[n-2] = climbSteps(n-2, records);
    return records[n-1] + records[n-2];
}
// @lc code=end

