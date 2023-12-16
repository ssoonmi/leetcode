/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;
    while (i < j && j < nums.length) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else if (nums[i] === 0) {
            i--;
        }
        i++;
        j++;
    }
    return nums;
};
