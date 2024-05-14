// Create an array
let fruits = ["apple", "banana", "cherry"];

// 1. push(): Adds elements to the end of an array
fruits.push("orange"); // ['apple', 'banana', 'cherry', 'orange']

// 2. pop(): Removes the last element from an array and returns it
let removedFruit = fruits.pop(); // 'orange', fruits: ['apple', 'banana', 'cherry']

// 3. unshift(): Adds elements to the beginning of an array
fruits.unshift("grape"); // ['grape', 'apple', 'banana', 'cherry']

// 4. shift(): Removes the first element from an array and returns it
let removedFirstFruit = fruits.shift(); // 'grape', fruits: ['apple', 'banana', 'cherry']

// 5. slice(): Extracts a section of an array and returns a new array
let slicedFruits = fruits.slice(1, 3); // ['banana', 'cherry']

// 6. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let splicedFruits = fruits.splice(1, 1, "kiwi", "melon"); // removed: ['banana'], fruits: ['apple', 'kiwi', 'melon', 'cherry']

// 7. concat(): Combines two or more arrays
let moreFruits = ["strawberry", "blueberry"];
let allFruits = fruits.concat(moreFruits); // ['apple', 'kiwi', 'melon', 'cherry', 'strawberry', 'blueberry']

// 8. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present
let indexOfMelon = fruits.indexOf("melon"); // 2

// 9. includes(): Determines whether an array includes a certain element, returning true or false as appropriate
let hasBanana = fruits.includes("banana"); // false

// 10. forEach(): Executes a provided function once for each array element
fruits.forEach((fruit) => console.log(fruit)); // Logs each fruit in the array

// 11. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array
let fruitLengths = fruits.map((fruit) => fruit.length); // [5, 4, 5, 6]

// 12. filter(): Creates a new array with all elements that pass the test implemented by the provided function
let longFruits = fruits.filter((fruit) => fruit.length > 5); // ['melon', 'cherry']

// 13. reduce(): Applies a function against an accumulator and each element in the array to reduce it to a single value
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0); // 16
