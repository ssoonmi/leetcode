/*
input: temperatures over days
output: array of the number of days you have to wait after that day to get a warmer temperature (if there is no future day that's possible, set it to 0)

input:  [10  2   2   5   1   3   7]
answer: [ 0  2   1   3   1   1   0]
          i
          0  2   1   3   1   1   0]

stack = [10]
7 > 3
3 > 1
1 > 5? no => pop off 1 from stack
3 > 5? no => pop off 3 from stack
7 > 5? yes
5 > 2
2 > 2? no => pop off 2 from stack
2 > 5? yes
2 > 10? no => pop off 2 from stack
5 > 10? no => pop off 5 from stack
7 > 10? no => pop off 7 from stack

O(2n) => O(n) time complexity (at most popping from the stack will be total average O(n))
O(n) space complexity (worst case size of stack)
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const res = [];
    for (let i = temperatures.length - 1; i >= 0; i--) {
        const temp = temperatures[i];
        while (stack.length && temperatures[stack[stack.length - 1]] <= temp) {
            stack.pop();
        }
        if (!stack.length) res[i] = 0;
        else res[i] = stack[stack.length - 1] - i;
        stack.push(i);
    }
    return res;
};
