/*
10:50pm-11:04pm (14 min)

inputs:
m x n board containing 'X' and 'O'
outputs:
flip all '0's into 'X's in a region surrounded by 'X's

x x x x
x o o x
x o x x
o o x o

dfs from all 'O's that are at the border
have a set that keeps track of the 'O''s that cannot be flipped

iterate through the entire grid and if the 'O' is not in the set, then
flip that cell to 'X'

time complexity:
O(m * n)

space complexity:
O(m * n)
*/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const noCapture = new Set();
    function dfs(row, col) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
            return;
        }
        const cell = board[row][col];
        if (cell === 'X') return;
        if (noCapture.has(`${row}-${col}`)) return true;
        noCapture.add(`${row}-${col}`);
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    for (let row = 0; row < board.length; row++) {
        dfs(row, 0);
        dfs(row, board[0].length - 1);
    }
    for (let col = 1; col < board[0].length - 1; col++) {
        dfs(0, col);
        dfs(board.length - 1, col);
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (
                board[row][col] === 'O' &&
                !noCapture.has(`${row}-${col}`)
            ) board[row][col] = 'X';
        }
    }
    return board;
};
