
// By Creating Anonymous Function
let myValue = [78, 89, 90, 56, 42, 43, 56, 67];

let solve = myValue.filter(function(clear){
    return clear < 70;
});

console.log(solve);