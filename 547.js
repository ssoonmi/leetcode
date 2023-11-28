const traverse = function(isConnected, city, visited) {
    if (visited.has(city)) return 0;
    visited.add(city);
    for (const otherCity in isConnected[city]) {
        if (city === otherCity) continue;
        if (visited.has(otherCity)) continue;
        if (isConnected[city][otherCity] === 1) {
            traverse(isConnected, otherCity, visited);
        }
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinces = 0;
    const visited = new Set();
    for (const city in isConnected) {
        if (visited.has(city)) continue;
        traverse(isConnected, city, visited);
        provinces++;
    }
    return provinces;
};
