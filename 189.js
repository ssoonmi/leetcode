/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    // brute force:
    // while (k > 0) {
    //     let prevNum = nums[nums.length - 1];
    //     for (let i = 0; i < nums.length; i++) {
    //         [nums[i], prevNum] = [prevNum, nums[i]];
    //     }
    //     k--;
    // }
    // return nums;

    // optimal:
    nums.reverse();
    let i = 0;
    let j = k - 1;
    while(i < j && j < nums.length) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
    i = k;
    j = nums.length - 1;
    while(i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
};
