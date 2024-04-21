const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getAgeYear: function () {
    return new Date().getFullYear() - this.age;
  },
};

console.log(user.getAgeYear());

//encapsulation can be used in two ways in javascript
//1. using function scope
//2. closures

//Function scope

function messageFunct() {
  const message = "Hey there!";
  console.log("Message from function scope:", message);
}

//Calling the function which internally defines the message variable
messageFunct();

//Trying to access the message from outside the function which defines it
console.log("Message from function scope:", message);
