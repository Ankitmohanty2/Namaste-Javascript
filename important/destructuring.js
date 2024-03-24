let arr = [67, 42, 54, 23, 12, 98, 34, 56, 78];
//let [a, b, c, d, ...rest] = arr;
let [a, , b, c, d, ...rest] = arr;
console.log(a, b, c, d, rest);
