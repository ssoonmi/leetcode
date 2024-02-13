/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] === val) {
            while (i < j && nums[j] === val) {
                j--;
            }
            nums[i] = nums[j];
            j--;
        }
        if (i < j) i++;
    }
    return nums[i] === val ? i : i + 1;
};
