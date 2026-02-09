Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
    console.log(`Mapping element at index ${i}: ${this[i]} -> ${result[result.length - 1]}`);
  }
  return result;
};


// Example usage:
const arr = [1, 2, 3, 9];
const mappedArr = arr.myMap(x => x * 2);
console.log(mappedArr); // Output: [2, 4, 6, 18]