/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions = potions.sort((a, b) => a - b);
    for (const idx in spells) {
        const spell = spells[idx];
        let i = 0;
        let j = potions.length;
        while (i < j) {
            const mid = Math.floor((j - i) / 2) + i;
            const potion = potions[mid];
            if (potion * spell < success) {
                i = mid + 1;
            } else {
                j = mid;
            }
        }
        spells[idx] = potions.length - i;
    }
    return spells;
};
