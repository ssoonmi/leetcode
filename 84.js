/*
12:45pm - 1:40pm
array of integers heights
histogram bar beight
width of each bar is 1
=> area of the largest rectangle in the histogram

Questions I didn't ask:
will all the heights be positive? yes

   5 |
   4 |    _
   3 |  _| |_   _
   2 |_| | | |_| |_   _
   1 |_|_|_|_|_|_|_|_|_|_______
      0 1 2 3 4 5 6 7 8

[1]         [0]       => length = 1, height = 1, area = 1
[1, 2]      [0, 1]    => length = 1, height = 2, area = 2
[1, 2, 3]   [0, 1, 2] => length = 1, height = 3, area = 3
[1, 2, 2]   [0, 1, 3] => length = 3, height = 2, area = 6
[1, 1]      [0, 4]    => length = 5, height = 1, area = 5
[1, 1, 2]   [0, 4, 5] => length = 1, height = 2, area = 2
[1, 1, 1]   [0, 4, 6] => length = 7, height = 1, area = 7
[]          []        => length = 1, height = 0, area = 0
[1]         [8]       => length = 1, height = 1, area = 1

O(n) time complexity where n is the length of the heights array
O(n) space complexity
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) { // [2, 1, 2]
    const stack = []; // [[0, 1], [2, 2]]
    let minArea = 0; // 2
    for (let i = 0; i < heights.length; i++) { // 2
        if (!stack.length || stack[stack.length - 1][1] <= heights[i]) {
            stack.push([i, heights[i]]);
            minArea = Math.max(minArea, heights[i]);
        } else {
            let j;
            while (stack.length && stack[stack.length - 1][1] > heights[i]) { // 2 > 1
                const [idx, height] = stack.pop(); // 0, 2
                j = idx;
                minArea = Math.max(minArea, (i - j) * height); // (1 - 0 + 1) * 1 => 2
            }
            if (j !== undefined && heights[i] > 0) stack.push([j, heights[i]]);
        }
    }
    let i = heights.length;
    while (stack.length) {
        const [j, height] = stack.pop();
        minArea = Math.max(minArea, (i - j) * height); // (3 - 0) * 1 => 3
    }
    return minArea;
};
