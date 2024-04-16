//Immediately invoked fucntion expression

(function () {
  console.log("Data Base Connected");
})(); //global scope ke andar function ko call karne ke liye () use karte hai taaki function call ho jaye without getting called
//agar hum function ko call karte hai toh function call ho jata hai and semi colon lagane ki jarurat hoti hai
((name) => {
  console.log(`Data Base Connected Two ${name}`);
})("Rahul"); //function ke andar function call karne ke liye () use karte hai taaki function call ho jaye without getting called
