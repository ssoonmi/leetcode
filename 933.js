
var RecentCounter = function() {
    this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)
    // It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
    while (this.requests.length && this.requests[0] < t - 3000) {
        this.requests.shift()
    }
    return this.requests.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
