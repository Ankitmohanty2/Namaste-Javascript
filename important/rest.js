var arr = [67, 42, 54, 23, 12, 98, 34, 56, 78];
let [a, , b, c, d, ...rest] = arr;

console.log(a, b, c, d, rest);


// Spread Operator
// The spread operator is used to spread the elements of an array or object. It is denoted by three dots (...).
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = [...arr1, ...arr2];
console.log(arr3);
