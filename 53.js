/**
9:57pm-10:08pm (11 min)

input
given integer array nums
output
find contiguous subarray with the largest sum and return its sum

[-2, 1, -3, 4, -1, 2]
 i,  j
largestSum = max(largestSum, value of the integer)
largestSumRange = [i, j]
localSum = -2
is localSum + j > j ? no => set i = j
localSum = j = 1
is localSum + j > j ? yes => set j + 1
localSum = 1 + -3 = -2
is localSum + j > j ? no => set i = j
localSum = 4

O(n) time complexity
O(1) space complexity
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = -Infinity;
    let localSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (localSum + num <= num) {
            localSum = num;
        } else {
            localSum += num;
        }
        if (largestSum < localSum) {
            largestSum = localSum;
        }
    }
    return largestSum;
};
