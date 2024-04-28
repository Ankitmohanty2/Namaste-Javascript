let array3 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function extra(elem) {
  return elem * 5 > 20; // Keep elements where elem * 5 is greater than 20
}

let result = array3.filter(extra);
console.log(result);

//filter returns an array of values that pass the condition True or False
