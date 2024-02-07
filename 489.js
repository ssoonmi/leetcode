/*

*/

/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

const DIRS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    const traversed = new Set();
    function dfs(row, col, direction) {
        traversed.add(`${row}-${col}`);
        robot.clean();
        for (let i = 0; i < 4; i++) {
            const newDirection = (direction + i) % 4;
            const [rowDiff, colDiff] = DIRS[newDirection];
            const newRow = row + rowDiff;
            const newCol = col + colDiff;
            if (!traversed.has(`${newRow}-${newCol}`) && robot.move()) {
                dfs(newRow, newCol, newDirection);
                robot.turnRight();
                robot.turnRight();
                robot.move();
                robot.turnRight();
                robot.turnRight();
            }
            robot.turnRight();
        }
    }
    dfs(1, 3, 0);
};
