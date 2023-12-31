/*
m = 3, n = 2
m = 3, n = 1

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const table = { 1: { 1: 1 } };
    let i = Math.max(m, n);
    while (i >= 2) {
        if (i <= m) {
            table[i] = { 1: 1 };
        }
        if (i <= n) {
            table[1][i] = 1;
        }
        i--;
    }
    i = 2;
    while (i <= m) {
        let j = 2;
        while (j <= n) {
            table[i][j] = table[i - 1][j] + table[i][j - 1];
            j++;
        }
        i++;
    }
    return table[m][n];
};


/* Unique Paths variation: */

/*
rectangular checkerboard
start - bottom left corner
end - bottom right corner

advance right
advance up/right
advance down/right

number of distinct paths

board can have dimensions of any size
all locations on the board are valid

number of rows and number of columns

1 original from start + 2 more additional paths

DP problem

[number of rows, 0] (start)
[number of rows, number of columns] (end)

x x x x
x x x x
s x x e

3 valid path
*/

const DIRS = [
    [0, 1],
    [-1, 1],
    [1, 1],
];

/*
x x x
s x e
*/

const distinctPaths = function(m, n, targets) {
    const memo = {};
    targets.sort((a, b) => a[1] - b[1]);
    const dfs = function(r, c, eR, eC) {
        if (r === eR && c === eC) return 1;
        if (c === n - 1) return 0;
        const key = `${r}-${c}`;
        if (key in memo) return memo[key];
        let numValidPaths = 0;
        for (const [rowD, colD] of DIRS) {
            if (rowD + r < 0 || rowD + r >= m) continue;
            if (colD + c < 0 || colD + c >= n) continue;
            numValidPaths += dfs(rowD + r, colD + c);
        }
        memo[key] = numValidPaths;
        return numValidPaths;
    };
    let startR = m - 1;
    let startC = 0;
    let res = 0;
    for (const target of targets) {
        const numValidPaths = dfs(startR, startC, target[0], target[1]);
        if (numValidPaths === 0) return 0;
        res += numValidPaths;
        startR = target[0];
        startC = target[1];
    }
    return res + dfs(startR, startC, m - 1, n - 1);
};
