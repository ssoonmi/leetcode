/*
5:33pm-5:46pm
beginWord = hit
endWord = cog

hit -> hot -> dot -> dog -> log
    -> hir               -> cog
           -> lot
[hir, hot, dot, dog, lot, log, cog]

return 0 if endWord is not in the wordList
a helper function to figure out if all, but one of the letters are the same with two words
to build the adjacency list, we have to compare each word to the other words to
build the graph
then from the beginWord, traverse the graph to the endWord
*/

function matchAllButOne(word1, word2) {
    let nonMatches = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) nonMatches++;
        if (nonMatches > 1) return false;
    }
    return nonMatches !== 0;
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    const adjList = {};
    wordList.push(beginWord);
    for (let i = 0; i < wordList.length - 1; i++) {
        const word1 = wordList[i];
        for (let j = i + 1; j < wordList.length; j++) {
            const word2 = wordList[j];
            if (matchAllButOne(word1, word2)) {
                if (!(word1 in adjList)) adjList[word1] = [];
                if (!(word2 in adjList)) adjList[word2] = [];
                adjList[word1].push(word2);
                adjList[word2].push(word1);
            }
        }
    }
    const queue = [[beginWord, 1]];
    const visited = new Set();
    while (queue.length) {
        const [word, depth] = queue.shift();
        if (visited.has(word)) continue;
        if (word === endWord) return depth;
        visited.add(word);
        if (!(word in adjList)) continue;
        for (const word2 of adjList[word]) {
            queue.push([word2, depth + 1]);
        }
    }
    return 0;
};
