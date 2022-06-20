//Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
//Viết hàm random(a) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ -a đến a
let a = 45;
let b = -a;
// + 1 để nó nhận được giá trị a hoặc -a
let c = Math.floor(Math.random() * (a - b + 1) + b);
console.log(c);

