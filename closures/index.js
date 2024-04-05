function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    // y();
    return y;
}

// the function x() returns the function y() which is stored in the variable final.
var final = x();
console.log(final); // it will [Function: y]

z(); // it will print 7

//function along with its lexical scope bundled together is called closure.