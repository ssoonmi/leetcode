/*
1 - 9
k numbers (at most 8 numbers)
sum to n
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, num = 1, sum = 0, combination = '', ans = []) {
    if (sum === n && k === combination.length) {
        ans.push(combination.split(''));
        return ans;
    } else if (sum >= n || k <= combination.length) {
        return ans;
    } else if (num > 9) {
        return ans;
    }
    combinationSum3(k, n, num + 1, sum, combination, ans);
    combination += num;
    sum += num;
    combinationSum3(k, n, num + 1, sum, combination, ans);
    return ans;
};
