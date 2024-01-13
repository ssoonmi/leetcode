/*
10 minutes
m x n matrix
each row is sorted in ascending order
the first integer of each row is greater than the last integer of the previous row

target integer
return true if target is in the matrix
otherwise return false

time complexity: O(log(m * n))
space complexity: O(1)

questions:
will there be any negative numbers?
will there be duplicate numbers?

i = 0 => (0, 0) position
j = (m * n) - 1 => (m - 1, n) position

if the pointers ever intersect, then I know the target is not in matrix
mid = Math.floor((i + j) / 2) =>
    row = Math.floor(mid / max num of columns)
    col = mid % max num of columns
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    let j = (matrix.length * matrix[0].length);
    while (i < j) {
        const mid = Math.floor((i + j) / 2);
        const row = Math.floor(mid / matrix[0].length);
        const col = mid % matrix[0].length;
        const num = matrix[row][col];
        if (num === target) return true;
        else if (num < target) i = mid + 1;
        else j = mid;
    }
    return false;
};
