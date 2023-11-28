/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms, room = 0, visited = new Set()) {
    if (visited.has(room)) return false;
    visited.add(room);
    if (visited.size === rooms.length) return true;
    const keys = rooms[room];
    for (let key of keys) {
        if (canVisitAllRooms(rooms, key, visited)) return true;
    }
    return false;
};
