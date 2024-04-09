
// By Creating Anonymous Function
// let myValue = [78, 89, 90, 56, 42, 43, 56, 67];

const { ResourceLoader } = require("jsdom");

// let solve = myValue.filter(function(clear){
//     return clear < 70;
// });

// console.log(solve);


// By creating normal function
let myValue = [78, 89, 90, 56, 42, 43, 56, 67];

function solve(back) {
    return back < 70;
}

let wako = myValue.filter(solve);
console.log(wako);


async function greet() {
    return "hello world!";
}


greet()
.then((Result)=>{
console.log("solution is good");
})
.catch((err) => {
    console.log("its an error");
})