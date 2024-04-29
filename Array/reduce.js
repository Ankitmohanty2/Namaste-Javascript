const numbers = [10, 5, 20, 8, 15];

// Using reduce to find the maximum value
const maxNumber = numbers.reduce((max, current) => {
  return Math.max(max, current);
}, -Infinity);

console.log("Maximum Number:", maxNumber);

//reduce method is used to reduce the array to a single value
