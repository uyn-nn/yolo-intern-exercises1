// Viết hàm hoán đổi giá trị của 3 số a, b và c với nhau
let array = [10, 11, 12] 
let temp = array[0];
array[0] = array[1];
array[1] = array[2];
array[2] = temp;
console.log(array);

