/*
inputs:
candidates (distinct integers)
target integer
output:
list of all unique combinations fo candidates where the chose numbers sum to target

branching:
take or don't take the number for each number and add it to the sum
if the sum is equal to the target, then add the combination of integers to the result

questions:
can there be negative numbers in the candidates array? no

Time complexity:
O(2^n) where n is the minimum candidate number
Space complexity:
O(n*2^n)
*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    function dfs(i, sum, combination) {
        if (i >= candidates.length) return;
        if (sum === target) return res.push(combination);
        if (sum > target) return;
        const candidate = candidates[i];
        dfs(i, sum + candidate, [...combination, candidate]);
        dfs(i + 1, sum, combination);
    }
    dfs(0, 0, []);
    return res;
};
