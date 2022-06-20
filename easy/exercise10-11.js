//Viết hàm tìm giá trị lớn nhất - nhỏ nhất trong 1 mảng các số//Viết hàm tìm số dư của a chia cho b (không dùng toán tử % hoặc toán tử tương tự)
//Viết hàm tính tổng số chẵn - lẻ trong một mảng
let array = [2, 32, 23, 24, 14, 4, 13];
let maxArray = array[0],
    minArray = array[1];
for (let i =0; i < array.length; i++) {
    if(array[i] > maxArray) {
        maxArray = array[i];
    } else if (array[i] < minArray) {
        minArray = array[i];
    }
} 
console.log('Giá trị lớn nhất trong mảng là: ' + maxArray);
console.log('Giá trị nhỏ nhất trong mảng là: ' + minArray);
