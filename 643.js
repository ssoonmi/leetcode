/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let i = 0;
    while (i < k) {
        sum += nums[i];
        i++;
    }
    let maxSum = sum;
    while (i < nums.length) {
        sum -= nums[i - k];
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        i++;
    }
    return maxSum / k;
};
