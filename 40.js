/*
10:35pm-10:45pm
candidates
target number
find all unique combinations in candidates where candidates sums up to the target
all numbers in candidates can only be used once in the combination

questions:
can candidates contain duplicate numbers? yes

solution set cannot contain duplicate combinations

take or not take a specific candidate to add to the sum

candidates = [1, 1, 2, 3], target = 5
output: [[1, 1, 3], [2, 3]]
         1           don't take
       /    \                  / \
    1,1     1,2                   1
     /     /   \
1,1,2   1,2,3 1,2
   /
1,1,2,3

time complexity:
O(n*2^n)
space complexity:
O(n*2^n)
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    function backtrack(i, sum, combination) {
        if (target === sum) return res.push(combination);
        if (sum > target) return;
        if (i >= candidates.length) return;
        const candidate = candidates[i];
        backtrack(i + 1, sum + candidate, [...combination, candidate]);
        let j = i;
        while (candidates[i] === candidates[j]) {
            j++;
        }
        backtrack(j, sum, combination);
    }
    backtrack(0, 0, []);
    return res;
};
