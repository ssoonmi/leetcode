/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== nums[i - 2] || nums[j] !== nums[i -1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};
