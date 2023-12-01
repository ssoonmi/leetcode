/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    entrance.push(0);
    const queue = [entrance];
    const minRow = 0;
    const maxRow = maze.length - 1;
    const minCol = 0;
    const maxCol = maze[0].length - 1;
    const diff = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length) {
        const [row, col, steps] = queue.shift();
        if (
            steps !== 0 &&
            (
                row === minRow || row === maxRow ||
                col === minCol || col === maxCol
            )
        ) return steps;
        if (maze[row][col] === '*') continue;
        maze[row][col] = '*';
        for (const [x, y] of diff) {
            if (maze[row + x]?.[col + y] === '.') {
                queue.push([row + x, col + y, steps + 1]);
            }
        }
    }
    return -1;
};
