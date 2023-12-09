/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, x = 0, y = 0, memo = {}) {
    if (x === m - 1 && y === n - 1) return 1;
    if (x in memo && y in memo[x]) return memo[x][y];
    let numPaths = 0;
    if (x < m - 1) numPaths += uniquePaths(m, n, x + 1, y, memo);
    if (y < n - 1) numPaths += uniquePaths(m, n, x, y + 1, memo);
    if (!(x in memo)) memo[x] = {};
    memo[x][y] = numPaths;
    return memo[x][y];
};
