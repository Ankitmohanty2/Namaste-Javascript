// Destructuring is a way to extract values from objects and arrays and bind them to variables in a more concise way.

let arr = [67, 42, 54, 23, 12, 98, 34, 56, 78];
let [a, , b, c, d, ...rest] = arr;

console.log(a, b, c, d, rest);

let z = "0";
console.log(+z++);