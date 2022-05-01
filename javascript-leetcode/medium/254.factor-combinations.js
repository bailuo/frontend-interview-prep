const { start } = require('repl');

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
    return getFactors1(n);
};

/**
 * Accepted
 * 68/68 cases passed (92 ms)
 * Your runtime beats 71.43 % of javascript submissions
 * Your memory usage beats 42.86 % of javascript submissions (47.5 MB)
 * @param {*} n
 * @returns
 */
const getFactors1 = function (n) {
    const results = [];
    factorBacktracking(results, [], n, 2);
    return results;
};
function factorBacktracking(ans, path, num, start) {
    if (num === 1) {
        return;
    }
    for (let i = start; i < ~~(num / 2) + 1; i++) {
        const remain = num / i;
        if (remain < i) break;
        if (Number.isInteger(remain)) {
            ans.push([...path, i, remain]);
            factorBacktracking(ans, [i, ...path], remain, i);
        }
    }
}

const getFactors2 = (n) => {
    const dfs = (start, num) => {
        if (num === 1) {
            return [];
        }
        const ans = [];
        for (let i = start; i * i <= num; i++) {
            if (num % i !== 0) {
                continue;
            }
            const path = [];
            path.push(i);
            path.push(num / i);
            ans.push(path);
            const nextPaths = dfs(i, num / i);
            for (let np of nextPaths) {
                np.push(i);
                ans.push(np);
            }
        }
        return ans;
    };
    return dfs(2, n);
};
