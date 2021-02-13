/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    enum map {
        I = 1,
        IV = 4,
        IX = 9,
        V = 5,
        X = 10,
        XL = 40,
        XC = 90,
        L = 50,
        C = 100,
        CD = 400,
        CM = 900,
        D = 500,
        M = 1000,
    }
    let result: number = 0;
    for (let index: number = 0; index < s.length; index++) {
        const curr: string = s[index];
        const joint: string = s[index + 1] ? curr + s[index + 1] : '';
        if (map[joint]) {
            result += map[joint];
            index++;
            continue;
        }
        result += map[curr];
    }
    return result;
}
// @lc code=end
