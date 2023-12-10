/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqueNum = 0;
    for (let num of nums) {
        uniqueNum = num ^ uniqueNum;
    }
    return uniqueNum;
};
