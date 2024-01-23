/*
1:43pm-2:06pm brute force only
m x n board of characters
words
return all words on the board
adjacent characters - horizontal and vertical neighboring

o   a   a   n
e   t   a   e
i   h   k   r
i   f   l   v

oath, pea, eat, rain

     o
   / | \
  e  a  t

brute force:
iterate through the board to find a match with the first character of a word
then do a dfs to find if the rest of the word can be matched using that match
time complexity:
O(m*n*w) where w is the number of words
space complexity:
O(m*n)

questions:
does the order matter in the result words returned? no
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const res = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let found = false;
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
                const cell = board[row][col];
                let j = 0;
                const char = word[j];
                if (cell === char && traverse(board, row, col, word, j)) {
                    res.push(word);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }
    return res;
};

const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function traverse(board, row, col, word, j, visiting = new Set()) {
    if (j >= word.length) return true;
    if (visiting.has(`${row}-${col}`)) return false;
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }
    if (word[j] !== board[row][col]) return false;
    visiting.add(`${row}-${col}`);
    for (const [rowD, colD] of DIRS) {
        if (traverse(board, row + rowD, col + colD, word, j + 1, visiting)) {
            return true;
        }
    }
    visiting.delete(`${row}-${col}`);
    return false;
}
