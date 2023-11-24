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

// Greedy solution
var predictPartyVictory = function(senate) {
    const rIdxs = [];
    const dIdxs = [];
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') rIdxs.push(i);
        else dIdxs.push(i);
    }
    while (rIdxs.length && dIdxs.length) {
        if (rIdxs[0] < dIdxs[0]) {
            dIdxs.shift()
            rIdxs.push(rIdxs.shift() + senate.length);
        } else {
            rIdxs.shift()
            dIdxs.push(dIdxs.shift() + senate.length);
        }
    }
    return rIdxs.length ? 'Radiant' : 'Dire';
};
