function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();

//closure is a function that bundle together the function with the lexical environment in which it was declared.