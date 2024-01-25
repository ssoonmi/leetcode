/*
11:20pm-11:32pm
inputs:
m x n grid with 0 - empty cell, 1 - fresh orange, 2 - rotten orange

number of minutes until no cell has a fresh orange
maximum distance for rotten orange to touch a fresh orange

breadth first traversal from each rotten orange
put all the rotten oranges in a queue
and bfs from all rotten oranges to adjacent cells to convert fresh oranges
once there are no more fresh oranges, then we can return the depth of the bfs
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const queue = [];
    let orangeCount = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const cell = grid[row][col];
            if (cell === 2) {
                queue.push([row, col, 0]);
                orangeCount++;
            }
            if (cell === 1) {
                orangeCount++;
            }
        }
    }
    let maxMin = 0;
    while (queue.length) {
        const [row, col, min] = queue.shift();
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) continue;
        if (grid[row][col] !== 1 && min !== 0) continue;
        // add neighboring cells to queue
        orangeCount--;
        grid[row][col] = 2;
        maxMin = Math.max(min, maxMin);
        queue.push([row + 1, col, min + 1]);
        queue.push([row - 1, col, min + 1]);
        queue.push([row, col + 1, min + 1]);
        queue.push([row, col - 1, min + 1]);
    }
    return orangeCount === 0 ? maxMin : -1;
};
