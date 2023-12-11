/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    const trie = {};
    products = products.sort().reverse();
    for (const product of products) {
        let node = trie;
        for (const char of product) {
            if (!(char in node)) node[char] = {};
            node = node[char];
        }
        node.isWord = true;
    }
    let searches = [];
    let node = trie;
    let prefix = '';
    for (const char of searchWord) {
        const search = [];
        if (!node || !(char in node)) {
            searches.push(search);
            node = null;
            continue;
        }
        prefix += char;
        const stack = [[node[char], prefix]];
        while (stack.length && search.length < 3) {
            const [node, prefix] = stack.pop();
            if (node.isWord) search.push(prefix);
            for (const char in node) {
                if (char === 'isWord') continue;
                stack.push([node[char], prefix + char]);
            }
        }
        searches.push(search);
        node = node[char];
    }
    return searches;
};
