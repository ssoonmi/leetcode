/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // candies = [1, 4, 5, 3, 2, 3], extraCandies = 3
    // result = [false, true, true, true, true]
    const maxNumCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxNumCandies);
};
