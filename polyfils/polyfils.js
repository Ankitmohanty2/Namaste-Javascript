//map, filter, reduce
// Polyfill for map

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
