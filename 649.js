// https://leetcode.com/problems/dota2-senate/

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let queue = senate.split('');
    let prevR = 0;
    let prevD = 0;
    let round = queue.length;
    let hasD = false;
    let hasR = false;
    while (queue.length) {
        if (round === 0) {
            if (!hasD) return 'Radiant';
            if (!hasR) return 'Dire';
            hasD = false;
            hasR = false;
            round = queue.length
        }
        const senator = queue.shift();
        if (senator === 'R') {
            if (prevD > 0) {
                prevD--;
            } else {
                prevR++;
                queue.push(senator);
            }
            hasR = true;
        } else if (senator === 'D') {
            if (prevR > 0) {
                prevR--;
            } else {
                prevD++;
                queue.push(senator);
            }
            hasD = true;
        }
        round--;
    }
};


// "DRRDRDRDRDDRDRDR"
// prevD = 0
// prevR = 2
// "DRRRRDDD"
// "DRRRRDDD"
// "DRRR"
// "DRRR"
// "DRR"
// "DRR"
// "RR"
// "RR"
