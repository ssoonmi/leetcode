/*
5:05pm-5:46pm

non negative integer num to its English words representation

Input: num = 123
Output: "One Hundred Twenty Three"

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

edge case 1: 19 => "Nineteen", not "Ten Nine"
tens digit + ones digit is less than 20 and greater than 10, then the words
are combined into one word

edge case 2: 20 => "Twenty", not "Two Ten"
The tens digit has a custom word

edge case 3: 100 => "One Hundred", not "One Hundred Zero Ten Zero"
zeros eliminate the word in that digit

break down number into 3 digit parts
12345 => 12 and 345 => "Twelve" and "Three Hundred Forty Five"
combine the parts with the word that corrreponds to their magnitude
"Twelve" + "Thousand" + "Three Hundred Forty Five"

Parse each part by:
Examining the last two numbers and seeing if they
fall into edge case 1
If it does not fall in edge case 1, then it examine if 10s falls in
edge case 3
If it does not fall in edge case 3, then 10s digit will be a custom
English word for 10s digit and 1s digit will be the number in English

Edge case 3 for 100s digit
*/

const MAGNITUDE = {
    0: "",
    1: "Thousand",
    2: "Million",
    3: "Billion",
    4: "Trillion",
    5: "Quintillion"
}

const NUMBERS = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
}


const TENS = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety",
}

function calcMagnitude(num) {
    if (Math.floor(num / 1000) === 0) return 0;
    return 1 + calcMagnitude(num / 1000);
}

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    let res = [];
    const nums = num.toString();
    let magnitude = calcMagnitude(num);
    let i = 0;
    if (num < 10 * Math.pow(1000, magnitude)) i--;
    if (num < 100 * Math.pow(1000, magnitude)) i--;
    while (i < nums.length) {
        const ones = nums[i + 2];
        const tens = nums[i + 1];
        const hundreds = nums[i];
        let resLength = res.length;
        if (hundreds && hundreds > 0) res.push(NUMBERS[hundreds] + " Hundred");
        if (tens && tens == 1) res.push(NUMBERS[tens + ones]);
        else if (tens && tens > 0) res.push(TENS[tens]);
        if (tens != 1 && ones > 0) res.push(NUMBERS[ones]);
        if (magnitude > 0 && res.length !== resLength) res.push(MAGNITUDE[magnitude]);
        i += 3;
        magnitude--;
    }
    return res.join(' ');
};
