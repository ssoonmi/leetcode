/*
O(n) time complexity
O(1) space complexity

Moore's Voting Algorithm
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let solution = 0;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            solution = num;
            count++;
        } else if (solution === num) {
            count++;
        } else {
            count--;
        }
    }
    return solution;
};
