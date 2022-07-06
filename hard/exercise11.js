// Viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa	
// 1 số nguyên n	--> lấy chữ số cuối cùng khác 0 của n giai thừa

let n = 10;
let factorial = 1;
for ( let i = n; i > 0; i-- ) {
    factorial *= i;
}
console.log(factorial);
let count = 0;
factorial = factorial + '';
for (let i = factorial.length - 1; i > 0; i--) {
    if(factorial[i] !== '0'){
        console.log(factorial[i]);
        break;
    }
}
