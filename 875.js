const countHours = function(piles, speed) {
    return piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);
};

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let minSpeed = 1;
    let maxSpeed = Math.max(...piles) + 1;
    while (minSpeed < maxSpeed) {
        const midSpeed = Math.floor((maxSpeed - minSpeed) / 2) + minSpeed;
        if (h < countHours(piles, midSpeed)) {
            minSpeed = midSpeed + 1;
        } else {
            maxSpeed = midSpeed;
        }
    }
    return minSpeed;
};
