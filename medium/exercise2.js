//Viết hàm nối 2 mảng số với nhau
let array1 = [3, 32, 1, 34, 23, 12, 0];
let array2 = [23, 54, 43, 2, 5, 34, 5];
//array1.push(...array2); console.log(array1);
//let array3 = [...array1, ...array2];
let array3 = array1.concat(array2);
console.log(array3);