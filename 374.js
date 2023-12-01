/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let i = 0;
    let j = n;
    let num = Math.floor((j - i) / 2);
    let guessedNum = guess(num + 1);
    while (guessedNum !== 0 && i < j) {
        if (guessedNum === 1) {
            i = num + 1;
        } else {
            j = num;
        }

        num = Math.floor((j - i) / 2) + i;
        guessedNum = guess(num + 1);
    }
    return num + 1;
};
