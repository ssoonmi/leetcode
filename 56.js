/*
intervals[i] = [start, end]

merge all overlapping intervals
return an array of the non-overlapping intervals that cover all the intervals in
the input

intervals are considered overlapping if the start1 <= start2 && start2 >= end1
intervals are considered non-overlapping if the start2 > end1 || end2 < start1
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        return a[0] - b[0];
    });
    const res = [];
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (!res.length) res.push(interval);
        const [s1, e1] = interval;
        const [s2, e2] = res[res.length - 1];
        if (s1 > e2) {
            res.push(interval);
        } else {
            res[res.length - 1][0] = Math.min(s1, s2);
            res[res.length - 1][1] = Math.max(e1, e2);
        }
    }
    return res;
};
