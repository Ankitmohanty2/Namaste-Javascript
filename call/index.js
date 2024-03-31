let name1 = {
    firstName: "virat",
    lastName: "kohli",
printName : function(){
    console.log(this.firstName + " " + this.lastName);
}
}
name1.printName(); 


let name2 = {
    firstName: "rohit",
    lastName: "sharma",
}
name1.printName.call(name2); //call method is used to call the function of another object