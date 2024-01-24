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
    const trie = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let curr = trie;
        for (const char of word) {
            if (!(char in curr)) curr[char] = {};
            curr = curr[char];
        }
        if (!curr.numMatches) curr.numMatches = 0;
        curr.numMatches++;
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            traverse(board, row, col, trie, res);
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

function traverse(board, row, col, trie, res, word = '') {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return;
    }
    if (board[row][col] === '.') return;
    for (const char in trie) {
        if (board[row][col] === char) {
            board[row][col] = '.';
            word += char;
            if (trie[char].numMatches) {
                trie[char].numMatches--;
                if (trie[char].numMatches === 0 && Object.keys(trie[char]).length === 1) {
                    delete trie[char];
                }
                res.push(word);
            }
            if (char in trie) {
                for (const [rowD, colD] of DIRS) {
                    traverse(board, row + rowD, col + colD, trie[char], res, word);
                }
            }
            board[row][col] = char;
            return;
        }
    }
}
