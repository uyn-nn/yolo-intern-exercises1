// Viết hàm xáo trộn thứ tự của các phần tử trong mảng số	
// 1 mảng số --> 1 mảng số mới với tất cả các ví trí của các phần tử đã được thay đổi

let array = [1, 12, 11, 7, 3, 10, 5];
let array2 = [];
for ( let i = 0; i < array.length; i++ ) {
    for ( let j = 0; j < array.length; j++ ) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
console.log(array);

