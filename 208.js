/**
10:24am-10:35pm
implement a trie
efficiently store and retrieve keys in a dataset of strings
autocomplete/spellchecker

insert(word) inserts the word into the trie
search(word) returns true if the word is in the trie, false otherwise
startsWith(prefix) returns true if there is a word in the trie that has the
prefix, false otherwise

start
starts
store
search
          s
       /    \
      t     e
     / \    |
    a   o   a
    |   |   |
    r   r   r
    |   |   |
->  t ->e   c
    |       |
->  s     ->h

hash map where the key is the letter and the value is another hash map that
stores the next letters that could potentially match as children
{t: { isWord: true, s: { isWord: true } }}

insert:
O(w) time complexity where w is the word length
O(w) space complexity

search:
O(w) time complexity where w is the word length
O(1) space complexity

startsWith:
O(w) time complexity where w is the prefix length
O(1) space complexity
*/
var Trie = function() {
    this.map = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.map;
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
Trie.prototype.search = function(word) {
    let curr = this.map;
    for (const char of word) {
        if (!(char in curr)) return false;
        curr = curr[char];
    }
    return !!curr.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.map;
    for (const char of prefix) {
        if (!(char in curr)) return false;
        curr = curr[char];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
