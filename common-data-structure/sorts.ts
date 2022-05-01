/**
 * insert sort functions
 * @param arr
 * @returns
 */
export const insertSort1 = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        let i = index;
        while (i > 0 && arr[i - 1] > arr[i]) {
            const temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
            i--;
        }
    }
    return arr;
};

export const insertSort2 = (arr) =>
    arr.reduce((accu, item, index) => {
        let i = index;
        while (i > 0 && item < accu[i - 1]) {
            accu[i] = accu[i - 1];
            accu[i - 1] = item;
            i--;
        }
        return accu;
    }, arr);

/**
 *
 * merge sort
 * @param left
 * @param right
 * @returns
 */
const mergeHelper = (left: Array<number>, right: Array<number>): Array<number> => {
    const ans: Array<number> = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            ans.push(left[i]);
            i++;
            continue;
        }
        ans.push(right[j]);
        j++;
    }
    left.splice(0, i);
    right.splice(0, j);
    return [...ans, ...left, ...right];
};

export const mergeSort = (arr: Array<number>): Array<number> => {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.splice(0, mid);
    return mergeHelper(mergeSort(left), mergeSort(arr));
};
