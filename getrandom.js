/**
 * Initialize your data structure here.
 */
const swap = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
const RandomizedSet = function () {
  this.map = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const index = this.map[val];
  if (index !== undefined) {
    return false;
  }
  this.arr.push(val);
  this.map[val] = this.arr.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const index = this.map[val];
  if (index !== undefined) {
    if (index !== this.arr.length - 1) {
      this.map[this.arr[this.arr.length - 1]] = index;
      swap(this.arr, index, this.arr.length - 1);
    }
    delete this.map[val];
    this.arr.pop();
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
