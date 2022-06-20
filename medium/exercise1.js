//Viết hàm sắp xếp 1 mảng các số theo thứ tự tăng hoặc giảm dần
let array = [12, 32, 1, 3, 45, 234, 34, 343];
for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
// array.sort();
// array.reverse();
console.log(array);