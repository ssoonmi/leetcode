/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) return 0;
    points.sort((a, b) => a[0] - b[0]);
    let numArrows = 1;
    let [_, prevMaxEnd] = points[0];
    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i];
        if (start > prevMaxEnd) {
            prevMaxEnd = end;
            numArrows++;
        } else {
            prevMaxEnd = Math.min(end, prevMaxEnd);
        }
    }
    return numArrows;
};
