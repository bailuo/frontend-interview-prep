import { insertSort1, insertSort2, mergeSort } from '../sorts';

describe('test Sorts', () => {
    const arr = [1, 7, 4, 2, 17, 13, 9];
    test('insertSort1', () => {
        expect(insertSort1(arr)).toEqual([1, 2, 4, 7, 9, 13, 17]);
    });
    test('insertSort2', () => {
        expect(insertSort2(arr)).toEqual([1, 2, 4, 7, 9, 13, 17]);
    });
    test('mergeSort', () => {
        expect(mergeSort(arr)).toEqual([1, 2, 4, 7, 9, 13, 17]);
    });
});
