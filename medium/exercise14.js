// Luật tính thuế thu nhập cá nhân ở việt nam như sau
//  - nếu thu nhập tháng cao hơn 50 triệu công dân phải nộp thuế là 20%
//  - nếu thu nhập tháng từ 20 đến 50 triệu công dân phải nộp thuế 10%
//  - nếu thu nhập tháng dưới 20 triệu công dân phải nộp thuế 5%
// Viết hàm tính số tiền thuế phải nộp trong n tháng của một người
let month = 1;
let salary = 30;
let tax;
if (salary < 20) {
    tax = salary*0.05*month;
} else if (20 <= salary < 50) {
    tax = salary*0.1*month;
} else tax = salary*0.2*month;
console.log(tax);
