// Define the callback function
function callbackFunction() {
  console.log("I am a callback function");
}

// Define the higher order function that takes a function as a parameter
function higherOrderFunction(callback) {
  // Log a message indicating that this is a higher order function
  console.log("I am a higher order function");
  
  // Call the provided callback function
  callback();
}

// Call the higher order function and pass the callback function as an argument
higherOrderFunction(callbackFunction);
