//Viết hàm kiểm tra một số có phải là số nguyên tố hay không
function isPrime(n) {
    let flag = 1;
    if (n < 2)
        return flag = 0;
    let i = 2;
    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break;
        }
        i++;
    }
    return flag;
}

let n = 45;
let check = isPrime(n);
if (check == 1) 
    console.log(n + ' la so nguyen to');
else console.log (n + ' khong la so nguyen to');