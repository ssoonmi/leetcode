/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0;
    let maxSum = 0;
    for (const num of gain) {
        sum += num;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};
