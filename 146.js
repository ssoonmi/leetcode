/*
2:09pm (unfinished because of bugs, approach passed)
5pm next day
initialize a cache with a positive size capacity

get(key) => return the value of the key if it exists, otherwise return -1
put(key, value) => update the value of the key if the key exists, otherwise add the key-value pair to the cache
if the number of keys exceeds capacity, evict the least recently used key

We can keep track of the most recently used to least recently used using a Linked List DS where the front node is the most recently used
We can map the key to the value by mapping the key to the Node that contains the value in the Linked List by using a Hash Map DS

{ s: Node 2, t: Node 9, u: Node 3 }
Node 3 -> Node 2 -> Node 9

get(s) => Node 2
access the node through the hash map at the given key
reassign the Node 2 to be at the head of the linked list by reassigning the next pointer of Node 3 to Node 9 (which removes Node 2 from the LL and adds it to the head)

set(s, 6)
access the node through the hash map at the given key
reassign the Node 2 to be at the head of the linked list by reassigning the next pointer of Node 3 to Node 9 (which removes Node 2 from the LL and adds it to the head)
set the value of Node 2 to 6

set(v, 7)
access the node through the hash map at the given key, but since it's not the hash map, then we create a new node and add it to the hashmap, and add it as the new head of the linked list.
if the linked list length is greater than the capacity, remove the last node in the linked list and from the hash map

have a pointer at the end of the linked list to indicate which node is at the end
doubly linked list

O(1) time complexity
O(c) space complexity where c is the capacity
*/

class Node {
    constructor(key, val, next, prev) {
        this.key = key;
        this.val = val;
        this.next = next || null;
        this.prev = prev || null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!(key in this.map)) return -1;
    const node = this.map[key];
    if (this.tail === node && this.head !== this.tail) {
        this.tail = node.prev;
    }
    if (this.head !== node) {
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        this.head.prev = node;
        node.next = this.head;
        node.prev = null;
        this.head = node;
    }
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node;
    if (!(key in this.map)) {
        node = new Node(key, value);
        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        if (!this.head) this.head = node;
        this.map[key] = node;
        this.length++;
    } else node = this.map[key];
    node.val = value;
    this.get(key);
    if (this.length > this.capacity) {
        if (this.tail) {
            const prevNode = this.tail.prev;
            delete this.map[this.tail.key];
            if (prevNode) prevNode.next = null;
            this.tail = prevNode;
        }
        this.length--;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
