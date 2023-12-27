/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    return spells.map(spell => {
        let i = 0;
        let j = potions.length;
        while (i < j) {
            const mid = Math.floor((j - i) / 2) + i;
            const strength = potions[mid] * spell;
            if (strength < success) {
                i = mid + 1;
            } else {
                j = mid;
            }
        }
        if (i >= j) return potions.length - i;
        return 0;
    });
};
