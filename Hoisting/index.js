

// getName(); // it will give error as getName is not defined yet
// console.log(x); // it will give undefined as x is not defined yet
// console.log(getName); // it will give the function definition


var x = 7;

function getName() {
    console.log('Namaste ankit Bhaiya!');
    }


//    var getName = () => {
//     console.log('Namaste ankit Bhaiya!'); // it will give error as getName is not a function and it will give undefined
//    }


getName();
console.log(x);


// so hoisting is a mechanism in javascript where variables and function declarations are moved to the top of their containing scope before code execution. and  its in memory allocation phase.