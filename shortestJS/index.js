var a = 10; // Declares a global variable 'a' and assigns it the value 10

function b() {
    var x = 20; // Declares a local variable 'x' inside the function 'b' and assigns it the value 20
}

console.log(window.a); // Accesses the global variable 'a' using the 'window' object (global scope)
console.log(a); // Accesses the global variable 'a' directly
console.log(this.a); // Accesses the global variable 'a' using the 'this' keyword (global scope)
