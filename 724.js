/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0
    let i = 1;
    while (i < nums.length) {
        rightSum += nums[i];
        i++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
        if (i < nums.length - 1) rightSum -= nums[i + 1];
    }
    return -1;
};
