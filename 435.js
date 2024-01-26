/*
9:20pm-9:45pm
inputs:
intervals[i] = [start,end]
output:
min num of intervals you need to remove to make the rest of the intervals non-overlapping

examples:

[[1, 2], [2, 3]]
overlapping: remove [1, 2] or [2, 3] and return 1

[[1, 5], [2, 3], [4, 5]]
remove [1, 5] and return 1

want to take the interval with the largest span and remove that first if it's overlapping

[[2, 3], [6, 7], [1, 5]]

brute force:
check if any are overlapping, if not return 0
try to eliminate one interval and check if any are overlapping, if not return 1
then try to eliminate another interval and check if any are overlapping, if not return 2
O(n * n^n)

optimization:
sort the intervals by start ASC then end DESC
[[1, 2], [1, 3], [1, 5], [4, 6]] => return 3

[[1, 5], [1, 3], [1, 2], [4, 6]] => return 2
iterate through all the adjacent intervals and increment the counter by 1 if
the intervals are overlapping
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let prevEnd = -Infinity;
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (interval[0] < prevEnd) {
            prevEnd = Math.min(prevEnd, interval[1]);
            count++;
        } else {
            prevEnd = interval[1];
        }
    }
    return count;
};
