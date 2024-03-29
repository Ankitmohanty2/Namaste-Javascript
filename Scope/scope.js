function a() {
    var b = 10;
    c();
    function c(){

    }
}

a();
console.log(b);


//Scope is the context in which a variable is declared. In JavaScript, variables have either global or function scope.
// In the example above, the variable b is declared inside the function a, so it is only accessible within that function.
// When the function a is called, the variable b is declared and initialized to 10, and then the function c is called.
// The function c is declared inside the function a, so it has access to the variable b. However, the variable b is not accessible outside of the function a, so the console.log(b) statement will throw an error.
