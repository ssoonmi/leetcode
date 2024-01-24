/*
12:58pm-1:12pm
inputs:
m x n grid of characters in a board
a word string
output:
return true if word exists in the grid

example:
board:
a   p   e
l   t   a
b   e   p
word: eat

time complexity:
O(m*n*4^(m*n))
space complexity:
O(m*n)
*/

const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function dfs(board, row, col, word, i) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }
    if (i >= word.length) return true;
    if (board[row][col] === '.') return false;
    const cell = board[row][col];
    if (cell !== word[i]) return false;
    if (i === word.length - 1 && cell === word[i]) return true;
    board[row][col] = '.';
    for (const [rowDiff, colDiff] of DIRS) {
        if (dfs(board, row + rowDiff, col + colDiff, word, i + 1)) return true;
    }
    board[row][col] = cell;
    return false;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const cell = board[row][col];
            if (cell === word[0]) {
                // start the traversal
                if (dfs(board, row, col, word, 0)) return true;
            }
        }
    }
    return false;
};
