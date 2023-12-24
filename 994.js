const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    let numFreshOranges = 0;
    for (const row in grid) {
        for (const col in grid[row]) {
            if (grid[row][col] === 2) {
                queue.push([Number(row), Number(col), 0]);
                numFreshOranges++;
            } else if (grid[row][col] === 1) {
                numFreshOranges++;
            }
        }
    }
    let maxMins = 0;
    while (queue.length) {
        const [row, col, mins] = queue.shift();
        if (mins !== 0 && grid[row][col] !== 1) continue;
        grid[row][col] = 2;
        numFreshOranges--;
        maxMins = mins;
        for (const [rowD, colD] of DIRS) {
            const newRow = rowD + row;
            const newCol = colD + col;
            if (!(newRow in grid) || !(newCol in grid[newRow])) continue;
            if (grid[newRow][newCol] !== 1) continue;
            queue.push([newRow, newCol, mins + 1]);
        }
    }
    return numFreshOranges === 0 ? maxMins : -1;
};
