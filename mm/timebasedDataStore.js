var TimeMap = function () {
  this.store = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.has(key)) {
    this.store.set(key, []);
  }

  this.store.get(key).push([value, timestamp]);
};

const TIME_STAMP_IDX = 1;
const VALUE_IDX = 0;
/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  result = "";
  if (!this.store.has(key)) return result;

  const values = this.store.get(key);
  // apply binary search
  let [l, r, middle] = [0, values.length - 1, 0];
  while (l <= r) {
    middle = Math.floor((l + r) / 2);

    if (values[middle][TIME_STAMP_IDX] <= timestamp) {
      result = values[middle][VALUE_IDX];
      l = middle + 1;
    } else {
      r = middle - 1;
    }
  }
  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
