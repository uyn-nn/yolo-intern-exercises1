// Viết hàm tình tổng số các chữ số của 1 số nguyên
let a = 124;
//math.floor la so nguyen
let b = Math.floor(a/100);
let c = Math.floor((a-100)/10);
let d = (a-100)%10;
console.log(b + c + d);