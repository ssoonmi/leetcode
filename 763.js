/*
9:32pm-9:55pm

given a string s
partition the string into as many parts as possible so that each letter
appears in at most one part

after concatenating, the result should be s

return a list of integers representing the size of the partitions

"ababcbacadefegdehijhklij"

keep track of the first occurence of each letter in a hash map
{
    a:0, b:1, c:4, d:9, e:10, f:11 , g:13, h:16, k:20, l:21, i:19, j:18
}

keep a stack of all the lengths when iterating of the longest partitions
pop off the stack if the starting number of a letter is greater than the length
push the ending number of the letter to the stack
*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const map = {};
    const stack = [];
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (!(letter in map)) {
            map[letter] = i;
        } else {
            if (map[letter] < i - length) {
                while (map[letter] < i - length) {
                    length += stack.pop();
                }
            } else {
                length = 0;
            }
        }
        length += 1;
        stack.push(length);
        length = 0;
    }
    return stack;
};
