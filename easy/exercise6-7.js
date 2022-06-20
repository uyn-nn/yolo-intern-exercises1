//Viết hàm tính tổng số chẵn - lẻ trong một mảng
let array = [2, 32, 23, 24, 14, 4, 13];
let sumEven = 0, sumOdd = 0;
for (let i =0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        sumEven += array[i];
    } else {
        sumOdd += array[i];
    }
}
console.log('Tổng chẵn trong mảng là: ' + sumEven);
console.log('Tổng lẻ trong mảng là: ' + sumOdd);