//Viết hàm tìm vị trí của 1 số trong 1 mảng các số
let array = [2, 32, 23, 24, 14, 4, 13];
let index;
let a = 32;
for (let i = 0; i < array.length; i++ ) {
    if( array[i] === a) {
        index = i;
    } 
}
console.log('Vị trí cần tìm là: ' + index);
