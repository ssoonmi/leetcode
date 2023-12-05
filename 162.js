/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let i = 0;
    let j = nums.length;
    while (i < j) {
        const mid = Math.floor((j - i) / 2) + i;
        if (nums[mid] < nums[mid + 1]) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
};
