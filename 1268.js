/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const trie = {};
    products = products.sort();
    for (const product of products) {
        let node = trie;
        for (const char of product) {
            if (!(char in node)) node[char] = {};
            if (!('words' in node[char])) node[char].words = [];
            node[char].words.push(product);
            node = node[char];
        }
    }
    let searches = [];
    let node = trie;
    for (const char of searchWord) {
        if (!node || !(char in node)) {
            searches.push([]);
            node = null;
            continue;
        }
        searches.push(node[char].words.slice(0, 3));
        node = node[char];
    }
    return searches;
};
