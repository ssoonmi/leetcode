/*
7:59pm-8:06pm

nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
output = 8
1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8
*/

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.map = {};
    this.numKeys = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.map[i] = nums[i];
            this.numKeys++;
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let map1 = vec.map;
    let map2 = this.map;
    if (map1.numKeys > map2.numKeys) {
        map1 = this.map;
        map2 = vec.map;
    }
    let sum = 0;
    for (const i in map1) {
        if (map1[i] !== 0 && i in map2) {
            sum += map1[i] * map2[i];
        }
    }
    return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
