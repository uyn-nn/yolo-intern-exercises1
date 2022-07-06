// "Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
// Viết hàm randomRange(a, b) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ a đến b"	2 số a và b 
// với b>a	một số random trong khoảng từ a đến b
function randomRange(a,b) {
// + 1 để nó nhận được giá trị a hoặc -a
    if(b > a) {
        let c = Math.floor(Math.random() * (a - b + 1) + b);
        console.log(c);
    }
}

randomRange(12,23);
