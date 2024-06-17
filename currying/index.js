// function currying
//currying with closures

let value = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

value(9)(7); // Outputs: 63

//currying with bind 
let multiply = function(x, y) {
    console.log(x * y);
}

// Partially applied function with the first argument fixed to 3
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5); // Outputs: 15



//manual currying
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

let multiply = function(x, y) {
    return x * y;
}

let curriedMultiply = curry(multiply);

console.log(curriedMultiply(3)(4)); // Outputs: 12
console.log(curriedMultiply(3, 4)); // Outputs: 12


//currying with arrow functions
let multiply = x => y => x * y;

let multiplyByFive = multiply(5);
console.log(multiplyByFive(4)); // Outputs: 20

//so currying is a process of converting a function that takes multiple arguments into a function that takes them one at a time.
