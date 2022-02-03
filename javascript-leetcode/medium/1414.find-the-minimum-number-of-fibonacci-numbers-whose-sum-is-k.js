/*
 * @lc app=leetcode id=1414 lang=javascript
 *
 * [1414] Find the Minimum Number of Fibonacci Numbers Whose Sum Is K
 */

// @lc code=start

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    return findMinFibonacciNumbersDC(k);
};
/* Accepted
504/504 cases passed (74 ms)
Your runtime beats 95.24 % of javascript submissions
Your memory usage beats 9.52 % of javascript submissions (42 MB) */
function findMinFibonacciNumbersSimple(k) {
    if (k === 0) {
        return 0;
    }
    let f = 1;
    let f1 = 1;
    while (f1 <= k) {
        const temp = f;
        f = f1;
        f1 += temp;
    }
    return 1 + findMinFibonacciNumbers(k - f);
}
/*
 * Accepted
 * 504/504 cases passed (113 ms)
 * Your runtime beats 14.29 % of javascript submissions
 * Your memory usage beats 9.52 % of javascript submissions (44.2 MB) */
function findMinFibonacciNumbersDC(k) {
    // get all fibonacci numbers less than or equal to K
    const arr = [1, 1];
    while (arr[arr.length - 1] < k) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    let res = 0;
    let remain = k;
    while (remain > 0) {
        let left = 1;
        let right = arr.length - 1;
        // binary search, find the number which equals to the remian
        while (left < right) {
            const mid = Math.ceil((left + right) / 2);
            if (arr[mid] <= remain) {
                left = mid;
                continue;
            }
            right = mid - 1;
        }
        // Ok, we find a number, the count + 1
        res++;
        // then, reduce the remain
        remain -= arr[left];
    }
    return res;
}

// @lc code=end
