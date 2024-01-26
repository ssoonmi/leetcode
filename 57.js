/*
inputs:
intervals sorted by start
new interval

insert so that the intervals are still sorted in ascending order by start and merge andy overlapping intervals if necessary

output:
return intervals after insertion

returning a new set of intervals
time complexity:
O(n) where n is the number of intervals
space complexity:
O(n) space

|        |
s        e
    |       |
    s       e
  |     |
  s     e
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = [];
    let added = false;
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (
            (newInterval[0] > interval[1] || newInterval[1] < interval[0])
        ) {
            if (!added && newInterval[1] <= interval[0]) {
                res.push(newInterval);
                added = true;
            }
            res.push(interval);
        } else if (!added) {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);
        }
    }
    if (!added) res.push(newInterval);
    return res;
};
