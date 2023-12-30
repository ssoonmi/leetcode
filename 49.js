/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Space complexity: O(n + a) where n is number of strings, a is number of characters used in all strings
    // Time complexity: O(n * m) where m is maximum length of strings
    const res = {};
    for (const str of strs) {
        const count = [];
        for (const i in str) {
            const code = str.charCodeAt(i) - 'a'.charCodeAt(0);
            if (!count[code]) count[code] = 0;
            count[code]++;
        }
        const key = count.join('-');
        if (!res[key]) res[key] = [];
        res[key].push(str);
    }
    return Object.values(res);

    // Time complexity O(n * mlogm) where n is the length of the strings array and m is maximum length of the strings
    // Space complexity is O(n + m)
    // const groups = [];
    // const idxs = {};
    // for (const str of strs) {
    //     const sortedStr = str.split('').sort().join('');
    //     if (sortedStr in idxs) {
    //         groups[idxs[sortedStr]].push(str);
    //     } else {
    //         idxs[sortedStr] = groups.length;
    //         groups.push([str]);
    //     }
    // }
    // return groups;

    // Space complexity: O(n) where n is the number of strings
    // Time complexity: O(n^2)
    // const counts = [];
    // for (const str of strs) {
    //     const count = {};
    //     for (const char of str) {
    //         if (!(char in count)) count[char] = 0;
    //         count[char]++;
    //     }
    //     counts.push(count);
    // }
    // const groups = [];
    // for (let i = 0; i < strs.length - 1; i++) {
    //     const str1 = strs[i];
    //     const count1 = counts[i];
    //     if (!count1) continue;
    //     const group = [str1];
    //     for (let j = i + 1; j < strs.length; j++) {
    //         const str2 = strs[j];
    //         const count2 = counts[j];
    //         if (!count2 || str1.length !== str2.length) continue;
    //         let noMatch = false;
    //         for (const char in count1) {
    //             if (count1[char] !== count2[char]) {
    //                 noMatch = true;
    //                 break;
    //             }
    //         }
    //         if (noMatch) continue;
    //         group.push(str2);
    //         counts[j] = null;
    //     }
    //     groups.push(group);
    // }
    // if (counts[counts.length - 1]) groups.push([strs[strs.length - 1]]);
    // return groups;
};
