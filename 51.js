/*
3:43pm-4:38pm
place n queens on n x n chessboard so that no two queens attack each other
return all distinct solutions to the n-queens puzzle

5x5: 10 solutions
q . . . .
. . q . .
. . . . q
. q . . .
. . . q .

. q . . .
. . . q .
q . . . .
. . q . .
. . . . q

q . . . .
. . . q .
. q . . .
. . . . q
. . q . .


4x4: - 2 solutions
. q . .
. . . q
q . . .
. . q .

x q x x
x x x q
q x x x
x x q x

. . q .
q . . .
. . . q
. q . .

3x3: - NO SOLUTIONS
. q .
. . .
q . .

2x2: - NO SOLUTIONS
q .
. .

1x1: - 1 solution
q

time complexity:
O(n * (n * n)) = O(n^3)

space complexity:
O(n)
*/

function copyValidGrid(grid) {
    const copy = [];
    for (let row = 0; row < grid.length; row++) {
        let rowVals = '';
        const queenCol = grid[row];
        for (let col = 0; col < grid.length; col++) {
            if (col === queenCol) rowVals += 'Q';
            else rowVals += '.';
        }
        copy.push(rowVals);
    }
    return copy;
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const cols = new Set();
    const posDiags = new Set();
    const negDiags = new Set();
    const validBoards = [];
    function backtrack(grid, row, col) {
        if (row < 0 || row >= n || col < 0 || col >= n) return;
        if (cols.has(col)) return;
        if (posDiags.has(row - col)) return;
        if (negDiags.has(row + col)) return;
        grid.push(col);
        cols.add(col);
        posDiags.add(row - col);
        negDiags.add(row + col);
        if (row === n - 1) {
            validBoards.push(copyValidGrid(grid));
        } else {
            for (let newCol = 0; newCol < n; newCol++) {
                backtrack(grid, row + 1, newCol);
            }
        }
        cols.delete(col);
        posDiags.delete(row - col);
        negDiags.delete(row + col);
        grid.pop();
    }
    const grid = [];
    for (let col = 0; col < n; col++) {
        backtrack(grid, 0, col);
    }
    return validBoards;
};
