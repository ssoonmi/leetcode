const toBits = (num) => {
    let bits = ["0"];
    let digit = 1;
    while (digit <= num) {
        let i = bits.length - 1;
        let foundZero = false;
        while (!foundZero && i >= 0) {
            if (bits[i] === "1") {
                i--;
            } else {
                foundZero = true;
            }
        }
        if (!foundZero) {
            bits.unshift("1");
            i = 0;
        } else {
            bits[i] = "1";
        }
        for (let j = i + 1; j < bits.length; j++) {
            bits[j] = '0';
        }
        digit++;
    }
    return bits;
};

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    // works but exceeds time complexity:
    // const aBits = toBits(a);
    // const bBits = toBits(b);
    // const cBits = toBits(c);
    // const length = Math.max(aBits.length, bBits.length, cBits.length);
    // // console.log(length);
    // while (aBits.length < length) {
    //     aBits.unshift('0');
    // }
    // while (bBits.length < length) {
    //     bBits.unshift('0');
    // }
    // while (cBits.length < length) {
    //     cBits.unshift('0');
    // }
    // console.log(aBits, bBits, cBits);
    // let operations = 0;
    // for (let i = 0; i < aBits.length; i++) {
    //     if (cBits[i] === '1') {
    //         if (aBits[i] !== '1' && bBits[i] !== '1') operations ++;
    //     } else {
    //         if (aBits[i] !== '0') operations += 1;
    //         if (bBits[i] !== '0') operations += 1;
    //     }
    // }
    // // return operations;


    let digit = 1;
    let operations = 0;
    let maxNum = Math.max(a, b, c);
    while (digit <= maxNum) {
        // console.log('-----')
        // console.log(digit, digit & a);
        // console.log(digit, digit & b);
        // console.log(digit, digit & c);
        // if digit is 1
        if ((digit & c) !== 0) {
            if ((digit & a) === 0 && (digit & b) === 0) {
                operations++;
            }
        }
        // if digit is 0
        else {
            if ((digit & a) !== 0) operations++;
            if ((digit & b) !== 0) operations++;
        }
        // console.log(operations);
        digit *= 2;
    }
    return operations;
};
