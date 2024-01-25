/*
10:06pm-10:38pm (32 min)

inputs:
m x n rectangular island borders both Pacific and Atlantic ocean
Pacific Ocean touches island's left and top edges
Atlantic Ocean touches island's right and bottom edges

island is partitioned into a grid of square cells
m x n heights where h[r][c] represents the height above sea level

the island receives a lot of rain and the rain water can flow to north, south,
east, and west if neighboring cell's height is less than or equal to the current cell's

Water can flow from any cell adjacent to an ocean into the ocean

outputs:
2D list of grid coordinates where result[i] = [r, c] and denotes that rain water can flow from cell (r, c) to BOTH Pacific and Atlantic oceans

  P P P P
      _ _
P 1 2 4 5 A
  _ _
P 3 6 2 1 A
  _ _ _
P 1 2 3 1 A
  A A A A

if we can get to the Pacific AND Atlantic for a cell, then set the cell to be
equal to 'y'
if we can't get to the Pacific or Atlantic for a cell, then set the cell to be
equal to 'n'

time complexity:
O(n^2 * m^2)

space complexity:
O(m * n)
*/

const DIRS = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1],
];

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const res = [];
    const visiting = new Set();
    const visited = new Set();
    function dfs(row, col, ocean, prevHeight = Infinity) {
        if (row < 0 || row >= heights.length || col < 0 || col >= heights[0].length) return false;
        const height = heights[row][col];
        if (height > prevHeight) return false;
        if (row === 0 && ocean === 'P') return true;
        if (col === 0 && ocean === 'P') return true;
        if (row === heights.length - 1 && ocean === 'A') return true;
        if (col === heights[0].length - 1 && ocean === 'A') return true;
        const key = `${row}-${col}-${ocean}`;
        if (visiting.has(key)) return false;
        if (visited.has(key)) return true;
        visiting.add(key);
        for (const dir of DIRS) {
            const [rowDiff, colDiff] = dir;
            if (dfs(row + rowDiff, col + colDiff, ocean, height)) {
                visited.add(key);
                visiting.delete(key);
                return true;
            }
        }
        visiting.delete(key);
        return false;
    }
    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[0].length; col++) {
            if (
                dfs(row, col, 'P') &&
                dfs(row, col, 'A')
            ) res.push([row, col]);
        }
    }
    return res;
};
