// Destructuring is a way to extract values from objects and arrays and bind them to variables in a more concise way.

let arr = [67, 42, 54, 23, 12, 98, 34, 56, 78];
let [a, , b, c, d, ...rest] = arr;

console.log(a, b, c, d, rest);

let z = "0";
console.log(+z++);

//filter method

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = arr1.filter((item) => item > 4);
console.log(even);