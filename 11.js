/*
heights of length n
n vertical lines
find two lines that form a container with the most water

return the maximum amount of water a container can store
2D container - maximum area between two vertical lines determined by the x-axis

can I assume that the input is going to be an array of positive heights?
will there be any negative heights to consider?
  |
  |   | |
| | | | | |
0 1 2 3 4 5
  1       2

0 - 5 => min height is 1 => area is 5
1 - 4 => min height is 2 => area is 8
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let res = 0;
    while (i < j) {
        const h1 = height[i];
        const h2 = height[j];
        const area = (j - i) * Math.min(h1, h2);
        res = Math.max(res, area);
        if (h1 <= h2) {
            i++;
        } else {
            j--;
        }
    }
    return res;
};
