/*
7:08pm-7:18pm (10 min)

english lowercase letters but in a different order
the order of the alphabet is some permutation of lowercase letters

input: sequence of words and the order of the alphabet
return true if the given words are sorted lexicographically in this alien
language

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
output = true

iterate through all the words
create a hash map of the letter mapped to the order
iterate through each of the characters in the two strings
return false if the order of the char
in the first string is greater than the order of the char in second string

time complexity: O(w * n) where w is number of words and n is the average num
of characters per word
space complexity: O(1)
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = {};
    for (let ord = 0; ord < order.length; ord++) {
        map[order[ord]] = ord;
    }
    for (let i = 0; i < words.length - 1; i++) {
        const firstWord = words[i];
        const secondWord = words[i + 1];
        for (let j = 0; j < firstWord.length; j++) {
            if (j >= secondWord.length) return false;
            if (map[firstWord[j]] > map[secondWord[j]]) return false;
            else if (map[firstWord[j]] < map[secondWord[j]]) break;
        }
    }
    return true;
};
