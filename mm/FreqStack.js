var FreqStack = function () {
  this.count = {};
  this.stacks = {};
  this.maxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.count[val] = (this.count[val] || 0) + 1;

  if (this.count[val] > this.maxFreq) {
    this.maxFreq = this.count[val];
    this.stacks[this.maxFreq] = [];
  }

  this.stacks[this.count[val]].push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const top = this.stacks[this.maxFreq].pop();
  this.count[top]--;

  if (this.stacks[this.maxFreq].length === 0) {
    this.maxFreq--;
  }

  return top;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
