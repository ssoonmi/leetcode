/*
7:21pm - 7:37pm (16 min)
inputs: 
m x n 2D binary grid which represents a map of 1's (land) and 0's (water)

return the number of islands

questions:
can I manipulate the grid? yes
horizontally and vertically connecting adjacent lands (not diagonally)

all 4 edges of grid are surrounded by water

example:
1 0 1 0
1 1 0 1
0 0 0 1

0 0 1 0
0 0 0 1
0 0 0 1

3 islands

Time complexity:
O(m x n)

Space complexity:
O(m x n)
*/

const DIRS = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
];

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const cell = grid[row][col];
            if (cell === '1') {
                count++;
                dfs(row, col);
            }
        }
    }
    function dfs(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return;
        }
        if (grid[row][col] === '0') return;
        grid[row][col] = '0';
        for (const [rowDiff, colDiff] of DIRS) {
            dfs(row + rowDiff, col + colDiff);
        }
    }
    return count;
};
