/*
1:06pm-1:27pm
find if a string matches any previously added string
addWord(word) adding a word to the data structure
search(word) returns true if there is any string in the DS that matches word. word may contain dots '.' where dots can be matched with any letter

start
starts
search
        s
       / \
      t   e
      |   |
      a   a
      |   |
      r   r
      |   |
    ->t   c
      |   |
    ->s ->h

search('starts') => true
search('start')  => true
search('star')   => false
search('s.ar..') => true

{ s: { t: { a: { r: { t: { isWord: true, s: { isWord: true }}}}}, e: {...}}}

addWord:
O(n) time complexity where n is the word length
O(n) space complexity

search:
O(t) time complexity where t is number of nodes in the trie
O(n) space complexity for the stack
 */
var WordDictionary = function() {
    this.trie = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let curr = this.trie;
    for (const char of word) {
        if (!(char in curr)) curr[char] = {};
        curr = curr[char];
    }
    curr.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(node, i) {
        if (i >= word.length) return false;
        const char = word[i];
        if (char in node) {
            if (i === word.length - 1) return !!node[char].isWord;
            return dfs(node[char], i + 1);
        } else if (char === '.') {
            for (const childChar in node) {
                if (i === word.length - 1 && node[childChar].isWord) {
                    return true;
                }
                if (childChar === 'isWord') continue;
                if (dfs(node[childChar], i + 1)) return true;
            }
        }
        return false;
    }
    return dfs(this.trie, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
