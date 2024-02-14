/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return nums.length;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        while (j < nums.length - 1 && nums[i] === nums[j]) {
            j++;
        }
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
};
