var generatePalindromes = function (s) {};

const isPalidromes = (arr) => {
    let left = -1;
    let right = arr.length;
    while (++left < --right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
    }
    return true;
};

const swap = (arr, left, right) => {
    const temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    return arr;
};

const permute = (arr, len, set) => {
    if (len === arr.length) {
        if (isPalidromes(arr)) {
            set.add(arr.join(''));
        }
    } else {
        for (let i = len; i < arr.length; i++) {
            swap(arr, len, i);
            permute(arr, len + 1, set);
            swap(arr, len, i);
        }
    }

    return set;
};

// exceed time limit
const generatePalindromesBrutalForce = (s) => {
    const arr = s.split('');
    const set = new Set();
    permute(arr, 0, set);
    return Array.from(set);
};

const generatePalindromesBacktracking = (s) => {};
