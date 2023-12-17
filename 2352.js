/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let pairs = 0;
    const rows = {};
    for (const row in grid) {
        const sRow = JSON.stringify(grid[row]);
        if (!(sRow in rows)) rows[sRow] = 0;
        rows[sRow]++;
    }
    for (const col in grid[0]) {
        const aCol = [];
        for (const row in grid) {
            aCol.push(grid[row][col]);
        }
        const sCol = JSON.stringify(aCol);
        if (sCol in rows) pairs += rows[sCol];
    }
    return pairs;
};
