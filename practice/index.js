// By Creating Anonymous Function
// let myValue = [78, 89, 90, 56, 42, 43, 56, 67];

// let solve = myValue.filter(function(clear){
//     return clear < 70;
// });

// console.log(solve);

// By creating normal function
// let myValue = [78, 89, 90, 56, 42, 43, 56, 67];

// function solve(back) {
//     return back < 70;
// }

// let wako = myValue.filter(solve);
// console.log(wako);

// async function greet() {
//     return "hello world!";
// }

// greet()
// .then((Result)=>{
// console.log("solution is good");
// })
// .catch((err) => {
//     console.log("its an error");
// })

// call bind and apply method

// Bind Method

// let myValue = {
//     name: "Mamun",
//     age: 25,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// let myValue2 = {
//     name: "Rahim",
//     age: 30,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// function myFunction() {
//     console.log(this.name);
// }

// let myBind = myFunction.bind(myValue);
// myBind();

// call method

// let myValue = {
//     name: "Mamun",
//     age: 25,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// let myValue2 = {
//     name: "Rahim",
//     age: 30,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// function myFunction() {
//     console.log(this.name);
// }

// myFunction.call(myValue);
// myFunction.call(myValue2);

// Apply Method

// let myValue = {
//     name: "Mamun",
//     age: 25,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// let myValue2 = {
//     name: "Rahim",
//     age: 30,
//     job: "Web Developer",
//     salary: 50000,
//     location: "Dhaka"
// }

// function myFunction() {
//     console.log(this.name);
// }

// myFunction.apply(myValue);
// myFunction.apply(myValue2);
