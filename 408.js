/*
6:40pm-6:48pm
string abbreviated by replacing any number of non-adjacent
non-empty substrings with their lengths
lengths should not have leading zeros

substitution -> s10n

given a word and an abbreviation, return true if string
matches the given abbreviation

loop the through string and the abbreviation with one
pointer for the word and another for the abbreviation
if two characters match, then increment both pointers
if two characters don't match and abbreviation character is
not a number, return false
if abbreviation character is a number, keep incrementing
abbreviation pointer until it's not a number and keep
track of number, convert it to a number and skip the
string pointer to that number, then do comparison again
*/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0;
    let j = 0;
    while (i < word.length && j < abbr.length) {
        if (word[i] === abbr[j]) {
            i++;
            j++;
            continue;
        }
        if (isNaN(abbr[j])) return false;
        if (abbr[j] === '0') return false;
        let number = '';
        while (j < abbr.length && !isNaN(abbr[j])) {
            number += abbr[j];
            j++;
        }
        i += Number(number);
    }
    return i === word.length && j === abbr.length;
};
