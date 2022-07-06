// Viết hàm nối 2 mảng số đã sắp xếp theo thứ tự giảm dần	
// mảng số a và mảng số b đã sắp xếp theo thứ tự giảm dần	
// một mảng số c chứa tất cả các phần tử trong mảng a và mảng b theo thứ tự giảm dần

let array1 = [4, 23, 22, 8, 7, 0];
let array2 = [11, 21, 9, 34, 23, 3];

// sắp xếp giảm dần array1
for (let i = 0; i < array1.length; i++) {
    for (let j = i + 1 ; j < array1.length; j++) {
        if (array1[i] < array1[j]) {
            let temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp;
        }
    }
}
console.log(array1);

// sắp xếp giảm dần array1
for (let i = 0; i < array2.length; i++) {
    for (let j = i + 1 ; j < array2.length; j++) {
        if (array2[i] < array2[j]) {
            let temp = array2[i];
            array2[i] = array2[j];
            array2[j] = temp;
        }
    }
}
console.log(array2);

// nối array1 và array2
let array3 = array1.concat(array2);
console.log(array3);

// sắp xếp giảm dần array3
for (let i = 0; i < array3.length; i++) {
    for (let j = i + 1 ; j < array3.length; j++) {
        if (array3[i] < array3[j]) {
            let temp = array3[i];
            array3[i] = array3[j];
            array3[j] = temp;
        }
    }
}
console.log(array3); 
