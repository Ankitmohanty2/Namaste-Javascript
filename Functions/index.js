var x = 1;
a();
b();
console.log(x);



function a(){
    var x = 10;
    console.log(x);
}


function b(){
    var x = 100;
    console.log(x);
}


// Higher Order Functions

let name = function(name, age){
    for(let i = 0; i < age; i++){
        name();
    }
}

let printName = function(){
    console.log("John Doe");
}

name(printName, 5);