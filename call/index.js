let name1 = {
    firstName: "virat",
    lastName: "kohli"
}
let printName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName  + " from " +  hometown + " " + state);
}
// function borrowing
// in call method we pass these arguments individually or comma separated
printName.call(name1, "Delhi", "uttar pradesh"); 


let name2 = {
    firstName: "rohit",
    lastName: "sharma",
}


//in apply method we pass these arguments in array
printName.apply(name2, ["Mumbai", "maharastra"]); //apply method is used to call the function of another object
