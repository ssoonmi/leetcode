/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const cols = []
    const rows = grid
    for (let row in grid) {
        for (let col in grid[row]) {
            if (!(col in cols)) cols[col] = []
            cols[col].push(grid[row][col])
        }
    }
    let numMatches = 0
    for (let col of cols) {
        let i = 0
        for (let row of rows) {
            i = 0
            while (i < cols.length) {
                if (col[i] !== row[i]) break
                i++
            }
            if (i === cols.length) numMatches++
        }
    }
    return numMatches
};
