// "Ngân hàng nhà nước việt nam có các loại tiền như: 
// 1 nghìn, 2 nghìn, 5 nghìn, 10 nghìn, 20 nghìn, 50 nghìn, 100 nghìn, 200 nghìn và 500 nghìn
// Viết hàm tính số đồng tiền ít nhất khi quy đổi một số tiền nhất định"	 
// một số tiền nhất định là bội số của 1 nghìn	số đồng tiền ít nhất để quy đổi

//Đơn vị tính: nghìn
function doiTien(tien) {
    let _500k = Math.floor(tien/500); tien = tien % 500; 
    let _200k = Math.floor(tien/200); tien = tien % 200;
    let _100k = Math.floor(tien/100); tien = tien % 100;
    let _50k = Math.floor(tien/50); tien = tien % 50;
    let _20k = Math.floor(tien/20); tien = tien % 20;
    let _10k = Math.floor(tien/10); tien = tien % 10; 
    let _5k = Math.floor(tien/5); tien = tien % 5;
    let _2k = Math.floor(tien/2); tien = tien % 2;
    let _1k = Math.floor(tien/1); tien = tien % 1;

    return ' đổi ra được ' + _500k + ' tờ 500, ' + _200k + ' tờ 200, ' 
            +'\n'+ _100k + ' tờ 100, ' +  _50k + ' tờ 50, ' + _20k + ' tờ 20, ' 
            + _10k + ' tờ 10, ' + '\n' + _5k + ' tờ 5, ' + _2k + ' tờ 2, ' + _1k + ' tờ 1 ';
}
let tien = 234;
console.log (tien + doiTien(tien));




