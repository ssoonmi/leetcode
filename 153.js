/*
7:50pm - 8:10pm

array of length n - sorted order integers rotated between 1 and n times
[0, 1, 2, 4, 5, 6, 7] could become:
[4, 5, 6, 7, 0, 1, 2] if it was rotated 4 times
[0, 1, 2, 4, 5, 6, 7] if it was rotated 7 times

all numbers are unique
return the minimum element of this array

[4, 5, 6, 7, 0, 1, 2]
            res
 i  m              j

[7, 0, 1, 2, 4, 5, 6]
 i  m  j       j

if the i value is greater than the j value, then I know the minimum value is somewhere between i and j (inclusive)

if the i value is less than the j value, then I know that the minimum value is a value less than i (inclusive)

if the m value is greater than the j value, then I know the minimum value is somewhere between m + 1 and j

if the m value is less than the j value, and the value before the m value is less than the m value, then I know the minimum value is between i and m - 1.

if the m value is less than the j value, and the value before the m value is greater than the m value, then I know the minimum value is the m value.

O(log n) time complexity
O(1) space complexity
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (nums[mid] > nums[j]) {
            i = mid + 1;
        } else if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        } else {
            j = mid - 1;
        }
    }
    return nums[i];
};
