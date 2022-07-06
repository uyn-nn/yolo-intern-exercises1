// Viết hàm trả về số chữ số 0 xuất hiện trong giá trị của n giai thừa	
// 1 số nguyên n	--> số chữ số 0 xuất hiện trong giá trị của n giai thừa
let n = 10;
let factorial = 1;
for ( let i = n; i > 0; i-- ) {
    factorial *= i;
}
console.log(factorial);
let count = 0;
factorial = factorial + '';
for (let i = 0; i < factorial.length; i++) {
    if(factorial[i] == '0'){
        count++;
    }
}
console.log(count);