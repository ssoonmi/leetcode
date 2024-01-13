/*
10 minutes
nums in ascending order
target integer
search for target in nums
if target exists, then return index
otherwise return -1

O(log n)

questions:
can there be duplicate numbers? if so, can i return any index that matches the target?
can there be negative numbers?

[0, 1, 4, 6, 7, 10] target = 5
         i,j

m = j - i / 2 + i = 5/2 + 0 = 2.5 ~ round down to 2
nums[m] = 4 === target => return 2

time complexity O(log n)
space complexity O(1)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0;
    let j = nums.length;
    while (i < j) {
        const mid = Math.floor((j - i) / 2) + i;
        if (nums[mid] < target) {
            i = mid + 1;
        } else if (nums[mid] === target) {
            return mid;
        } else {
            j = mid;
        }
    }
    return -1;
};
