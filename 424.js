/*
s string (only contains uppercase letters)
k operations integer

length of the longest substring containing the same latter after performing the above operations

s = HELLO, k = 3 => 5
s = HELLO, k = 2 => 4

what is the longest repeating substring with the same characters?

iterate through each character
keep track of the frequency of the letters in a hash map
if the hash map has only one key-value pair in it, that means that the character is the only character in the substring and I could replace other characters in future substrings to be like that character.

I need to keep track of the letter with maximum count in the hash map to determine how many other characters I can convert into that character.

Two-pointers when iterating through the substring
both would start at the beginning
and the second pointer would increase until the total count of the substring exceeds the maximum count plus the k value
the first pointer would increase if the total count of the substring exceeds the maximum count plus the k value

{ E: 1, L: 2, O: 1 }
length of the substring (pointer2 - pointer1) = 4
maximum count is 2
max count set {}
total count is 2 (also the length of substring)
length of substring (4) < max count + k (2 + 2) => false

s = HELLO, k = 2 => 
     1
        2
time: O(n) where n is the length of s
space: O(26) => O(1)
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    const count = {};
    let maxCount = 0;
    while (j < s.length) {
        if (!(s[j] in count)) count[s[j]] = 0;
        count[s[j]]++;
        if (count[s[j]] >= maxCount) {
            maxCount = count[s[j]];
        }
        while (j - i + 1 - maxCount > k) {
            count[s[i]]--;
            if (count[s[i]] === 0) delete count[s[i]];
            i++;
        }
        maxLength = Math.max(maxLength, j - i + 1);
        j++;
    }
    return maxLength;
};
