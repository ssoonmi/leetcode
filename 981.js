/*
8:45pm - 9:05pm

key-value (map) store mulitple values for the same key at different timestamps
retrieve the key's value at certain timestamps

TimeMap() initializes the data structure

method set(key, value, timestamp) stores the key with the value at the given timestamp

method get(key, timestamp) returns a value such that set was called previously with timestamp_prev <= timestamp
=> if there are multiple values, it returns the value associated with the largest timestamp_prev
=> if there are no values, it return an empty string

questions:
whenever the set method is called, will the timestamp be greater than when the set method was previously called? yes.

algorithm: use a hash map to store the keys and the timestamps as a nested array
use another hash map to store the keys and the values as a nested array

map1[key1][idx] = timestamp1
map2[key1][idx] = value1 where value1 is the value of timestamp1

get:
binary search the first map at the requested timestamp to get the index of the timestamp
from the index, get the value of the second map at the index of the nested array

set:
add the timestamp to the nested array value in the hash map at a specified key
add the value to the nested array value in the hash map at the specified key
*/

var TimeMap = function() {
    this.timestamps = {};
    this.values = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!(key in this.timestamps)) {
        this.timestamps[key] = [];
        this.values[key] = [];
    }
    this.timestamps[key].push(timestamp);
    this.values[key].push(value);
};

TimeMap.prototype.bSearch = function(key, timestamp) {
    let i = 0;
    let j = this.timestamps[key].length - 1;
    while (i <= j) {
        const mid = Math.floor((i + j) / 2);
        if (this.timestamps[key][mid] < timestamp) {
            i = mid + 1;
        } else if (this.timestamps[key][mid] > timestamp) {
            j = mid - 1;
        } else {
            return mid;
        }
    }
    return j;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(key in this.timestamps)) return '';
    const idx = this.bSearch(key, timestamp);
    return this.values[key][idx] || '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
