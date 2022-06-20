//Viết hàm tìm số dư của a chia cho b (không dùng toán tử % hoặc toán tử tương tự)
let a = 52, b = 12;
//Math.floor dung để lấy số nguyên tromg phép chia
let c = Math.floor(a/b);
let d = a - (c * b);
console.log('Số dư của số '+ a +' chia ' + b + ' là: ' + d);
