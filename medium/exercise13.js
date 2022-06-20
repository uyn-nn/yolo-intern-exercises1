// Luật tính giá nhà nghỉ ở hà nội như sau:
//  - 2 tiếng đầu mỗi tiếng 70k
//  - Từ ở tiếng thứ 2 tr đi mỗi tiếng 50k
//  - Qua đêm 160k
//  - Giờ checkout khi qua đêm là 8h sáng hôm sau nếu quá 8h thì khách sẽ phải trả thêm 40k mỗi giờ
// Viết hàm tính số tiền khách phải trả khi vào nhà nghỉ dựa theo giờ khách vào và giờ khách ra
// Biết mốc qua đêm được tính là 24h

let startTime = 5;
let endTime = 9;
let pay =  endTime - startTime;
if ((startTime > 8) && (endTime < 24) && (pay > 0)) {
    if (pay <= 2) {
        console.log(pay*70);
    } else {
        pay = pay*50 + 40;
        console.log(pay);
    }
} else if ((1 <= startTime < 8) && (endTime > 8) && (pay > 2)) {
    pay = (endTime - 8)*40 + 160;
    console.log(pay);
} else if ((startTime >= 1) && (endTime <= 8) && (0 < pay <= 8)) {
    console.log(160);
} 
