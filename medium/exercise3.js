//Viết hàm cộng giá trị của 2 mảng số
let array1 = [3, 32, 1, 34, 23, 12, 0];
let array2 = [23, 54, 43, 2, 5, 34, 5];
let array3 = [];
for (let i = 0; i < array1.length; i++){
    array3[i] = array1[i] + array2[i];
}
console.log(array3);
