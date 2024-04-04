// if(true) {
//     // compound statement
//     var a = 10;
//     console.log(a);

// }

var a = 200;
let b = 300; //script scoped
{
    var a = 10; //here a is shadowed
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(b); // 300

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// reason is var is global/function scoped and let and const are block scoped

//you cant shadow a variable with let or const