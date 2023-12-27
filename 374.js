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
    let i = 1;
    let j = n + 1;
    while (i < j) {
        const mid = Math.floor((j - i) / 2) + i;
        const comp = guess(mid);
        if (comp === -1) {
            j = mid;
        } else if (comp === 1) {
            i = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
