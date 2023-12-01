/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let numOranges = grid.reduce((sum, row) => sum + row.reduce((sum, col) => (col === 1 || col === 2) ? sum + 1 : sum, 0), 0);
    let maxMins = 0;
    const queue = [];
    for (const row in grid) {
        for (const col in grid[row]) {
            if (grid[row][col] === 2) queue.push([Number(row), Number(col), 0]);
        }
    }
    const dirs = [[1, 0],[-1, 0],[0, 1],[0, -1]];
    while (queue.length) {
        const [row, col, mins] = queue.shift();
        if (grid[row][col] === 0) continue;
        grid[row][col] = 0;
        maxMins = Math.max(maxMins, mins);
        numOranges--;
        for (const [x, y] of dirs) {
            if (grid[row + x]?.[col + y] === 1) {
                queue.push([row + x, col + y, mins + 1]);
            }
        }
    }
    if (numOranges !== 0) return -1;
    return maxMins;
};
