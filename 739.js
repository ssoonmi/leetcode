/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // if (!temperatures.length) return [];
    // const res = [];
    // res[temperatures.length - 1] = 0;
    // const stack = [temperatures.length - 1];
    // for (let i = temperatures.length - 2; i >= 0; i--) {
    //     const temp = temperatures[i];
    //     let latestTempI = stack[stack.length - 1];
    //     let numDays = 0;
    //     while (stack.length && temp >= temperatures[latestTempI]) {
    //         stack.pop();
    //         latestTempI = stack[stack.length - 1];
    //     }
    //     if (stack.length) numDays = latestTempI - i;
    //     stack.push(i);
    //     res[i] = numDays;
    // }
    // return res;

    const res = [];
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        if (res[i] === undefined) res[i] = 0;
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i);
    }
    return res;
};
