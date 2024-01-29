/*
6:40pm-6:52pm

triplets[i] = [a, b, c]
target = [x, y, z]

to obtain target, you may apply the following operation on triplets
any number of times (possibly zero):
- choose 2 indices i and j and update triplest[j] to become
  [max(a), max(b), max(c)] of the two indices
- return true if it's possible to get the target triplet as an element of triplets or false otherwise

triplets = [[2,5,3],[1,8,4],[1,7,5]]
target = [2,7,5]
if a === 2, check if 5 is less than or equal to 7 and if 3 is less than or equal to 5
if b === 7, check if 1 is less than or equal to 2 and if 5 is less than or equal to 5

triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]]
target = [5,5,5]
if b === 5 check if 2 is less than or equal to 3 and if 3 is less than or equal to 5
if c === 5 check if 1 is less than or equal to 5 and if 2 is less than or equal to 5
if a === 5 check if 2 is less than or equal to 5 and if 3 is less than or equal to 5

triplets = [[3,4,5],[4,5,6]]
target = [3,2,5]
if a === 3 check if 4 is less than or equal to 2, false
return false

time complexity: O(n)
space complexity: O(1)
*/

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    const [x, y, z] = target;
    const found = [false, false, false];
    for (let i = 0; i < triplets.length; i++) {
        const [a, b, c] = triplets[i];
        if (a <= x && b <= y && c <= z) {
            found[0] = found[0] || a === x;
            found[1] = found[1] || b === y;
            found[2] = found[2] || c === z;
        }
        if (found[0] && found[1] && found[2]) return true;
    }
    return false;
};
