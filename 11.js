//  0  1  2  3  4  5
// [3, 5, 2, 1, 4, 2]

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;
    while (i < j) {
        const area = Math.min(height[j], height[i]) * (j - i);
        maxArea = Math.max(maxArea, area);
        if (height[j] < height[i]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
};
