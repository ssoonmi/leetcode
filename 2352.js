/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const cols = [];
    for (let rowI = 0; rowI < grid.length; rowI++) {
        const row = grid[rowI];
        for (let colI = 0; colI < row.length; colI++) {
            if (!(colI in cols)) cols.push([]);
            cols[colI].push(row[colI]);
        }
    }
    let res = 0;
    for (let rowI = 0; rowI < grid.length; rowI++) {
        const row = grid[rowI];
        for (let colI = 0; colI < cols.length; colI++) {
            const col = cols[colI];
            for (let i = 0; i < row.length; i++) {
                if (row[i] !== col[i]) break;
                if (i === row.length - 1) res++;
            }
        }
    }
    return res;
};
