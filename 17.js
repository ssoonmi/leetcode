/*
2:57pm-3:12pm (15 min)
2-9 digits
inputs:
sequence of numbers on a phone
outputs:
return all possible letter combinations that the sequence could represent

questions:
will the sequence of numbers always be valid? (ie. will there be any 1s?) yes

example:
3 => ['d','e','f']
23 => ['ad','ae','af','bd','be','bf','cd','ce','cf']
623 => ['mad','mae','maf','mbd','mbe','mbf','mcd','mce','mcf',
        'nad',...,
        'oad',..]
time complexity:
O(n*4^n) where n is the number of digits in the sequence
space complexity:
O(4^n)
*/

const DIGIT_TO_LETTERS = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = digits.toString();
    function backtrack(i) {
        if (i >= digits.length) return [];
        if (i === digits.length - 1) return DIGIT_TO_LETTERS[digits[i]].split('');
        const subCombinations = backtrack(i + 1);
        const combinations = [];
        for (const letter of DIGIT_TO_LETTERS[digits[i]]) {
            for (const subCombination of subCombinations) {
                combinations.push(letter + subCombination);
            }
        }
        return combinations;
    }
    return backtrack(0);
};
