const DIRS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    entrance.push(0)
    const queue = [entrance];
    while (queue.length) {
        const [row, col, steps] = queue.shift();
        if (
            steps !== 0 &&
            (row === 0 || row === maze.length - 1 ||
            col === 0 || col === maze[0].length - 1)
        ) {
            return steps;
        }
        if (maze[row][col] !== '.') continue;
        maze[row][col] = 'V';
        for (const [rowD, colD] of DIRS) {
            const newRow = row + rowD;
            const newCol = col + colD;
            if (!(newRow in maze) || !(newCol in maze[newRow])) {
                continue;
            }
            if (maze[newRow][newCol] !== '.') continue;
            queue.push([newRow, newCol, steps + 1]);
        }
    }
    return -1;
};
