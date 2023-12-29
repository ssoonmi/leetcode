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
