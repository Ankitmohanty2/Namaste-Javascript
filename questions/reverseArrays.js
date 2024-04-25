//wap to reverse a array

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [5, 9, 7, 2, 1, 4];

let i = 0; //starting index
let j = arr.length - 1; //ending index

while (i <= j) {
  swap(arr, i, j);
  i++;
  j--;
}

console.log(arr);
