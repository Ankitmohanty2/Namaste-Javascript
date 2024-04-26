//map, filter, reduce
// Polyfill for map

//polyfils are used to add new methods to the existing objects

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

let map = [23, 78, 45, 8, 32, 56, 45, 78, 90, 12];

let result = map.myMap(function (value) {
  return value * 2;
});

console.log(result);

// polyfill for filter

Array.prototype.myFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let filter = [23, 78, 45, 8, 32, 56, 45, 78, 90, 12];

let result1 = filter.myFilter(function (value) {
  return value > 30;
});

console.log(result1);
