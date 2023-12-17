/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let sNums1 = new Set(nums1);
    let sNums2 = new Set();
    const answer = [[], []]
    for (let num of nums2) {
        if (!sNums1.has(num) && !sNums2.has(num)){
            answer[1].push(num);
        }
        sNums2.add(num);
    }
    for (let num of sNums1) {
        if (!sNums2.has(num)) {
            answer[0].push(num);
        }
    }
    return answer;
};
