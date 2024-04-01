// function currying

let multiply = function(x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, );
multiplyByTwo(7,5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


//so currying is a process of converting a function that takes multiple arguments into a function that takes them one at a time.