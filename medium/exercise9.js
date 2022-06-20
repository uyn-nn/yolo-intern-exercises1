//Viết hàm tìm tổng số các phần tử của chuỗi a trong chuỗi b với a, b là mảng số

let arrayA = [43, 4, 11, 3, 2, 23, 5];
let arrayB = [12, 4, 9, 3];
let array3 = 0;
for (let i = 0; i < arrayA.length; i++){
    for (let j = 0; j < arrayB.length; j++) {
        if( arrayA[i] === arrayB[j]) {
            array3 += arrayA[i];
            break;
        }
    }
}
console.log(array3);
