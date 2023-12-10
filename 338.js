/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const numOnes = [0];
    let bits = ['0'];
    let ones = 0;
    for (let num = 1; num <= n; num++) {
        let added = false;
        let i = bits.length - 1;
        while (!added && i >= 0) {
            if (bits[i] === '1') i--;
            else {
                bits[i] = '1';
                ones++;
                added = true;
            }
        }
        if (!added) {
            bits.unshift('1');
            ones++;
            i = 0;
        }
        for (let j = i + 1; j < bits.length; j++) {
            bits[j] = '0';
            ones--;
        }
        numOnes.push(ones);
    }
    return numOnes;
};
