// Viết hàm đổi từ số tiền bắng số sang số bằng chữ	
// một số --> một string mô tả số bằng chữ
// var ChuSo = new Array(' không ',' một ',' hai ',' ba ',' bốn ',' năm ',' sáu ',' bảy ',' tám ',' chín ');
// //var Tien = new Array( ' ',' nghìn ',' triệu ',' tỷ ',' nghìn tỷ ',' triệu tỷ');

// //1. Hàm đọc số có ba chữ số;
// function DocSo3ChuSo(baso) {
//     let tram, chuc, donvi;
//     let KetQua= '';
//     if(0 < baso && baso > 1000) 
//         console.log('Mời nhập lại với số có 3 chữ số');
//     else  {
//         tram=Math.floor(baso/100);
//         chuc=Math.floor((baso%100)/10);
//         donvi=baso%10;
//         if(tram==0 && chuc==0 && donvi==0) return '';
//         if(tram!=0)
//         {
//             KetQua += ChuSo[tram] + ' trăm ';
//             if ((chuc == 0) && (donvi != 0)) KetQua += ' linh ';
//         }
//         if ((chuc != 0) && (chuc != 1))
//         {
//                 KetQua += ChuSo[chuc] + ' mươi ';
//                 if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + ' linh ';
//         }
//         if (chuc == 1) KetQua += ' mười ';
//         switch (donvi)
//         {
//             case 1:
//                 if ((chuc != 0) && (chuc != 1))
//                 {
//                     KetQua += ' mốt ';
//                 }
//                 else
//                 {
//                     KetQua += ChuSo[donvi];
//                 }
//                 break;
//             case 5:
//                 if (chuc == 0)
//                 {
//                     KetQua += ChuSo[donvi];
//                 }
//                 else
//                 {
//                     KetQua += ' lăm ';
//                 }
//                 break;
//             default:
//                 if (donvi != 0)
//                 {
//                     KetQua += ChuSo[donvi];
//                 }
//                 break;
//             }
//         return KetQua;
//     }
// }

// console.log(DocSo3ChuSo(132));

var mangso = ['không','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];
function dochangchuc(so,daydu)
{
 var chuoi = "";
 chuc = Math.floor(so/10);
 donvi = so%10;
 if (chuc>1) {
  chuoi = " " + mangso[chuc] + " mươi";
  if (donvi==1) {
   chuoi += " mốt";
  }
 } else if (chuc==1) {
  chuoi = " mười";
  if (donvi==1) {
   chuoi += " một";
  }
 } else if (daydu && donvi>0) {
  chuoi = " lẻ";
 }
 if (donvi==5 && chuc>1) {
  chuoi += " lăm";
 } else if (donvi>1||(donvi==1&&chuc==0)) {
  chuoi += " " + mangso[ donvi ];
 }
 return chuoi;
}
function docblock(so,daydu)
{
 var chuoi = "";
 tram = Math.floor(so/100);
 so = so%100;
 if (daydu || tram>0) {
  chuoi = " " + mangso[tram] + " trăm";
  chuoi += dochangchuc(so,true);
 } else {
  chuoi = dochangchuc(so,false);
 }
 return chuoi;
}
function dochangtrieu(so,daydu)
{
 var chuoi = "";
 trieu = Math.floor(so/1000000);
 so = so%1000000;
 if (trieu>0) {
  chuoi = docblock(trieu,daydu) + " triệu";
  daydu = true;
 }
 nghin = Math.floor(so/1000);
 so = so%1000;
 if (nghin>0) {
  chuoi += docblock(nghin,daydu) + " nghìn";
  daydu = true;
 }
 if (so>0) {
  chuoi += docblock(so,daydu);
 }
 return chuoi;
}
function docso(so)
{
        if (so==0) return mangso[0];
 var chuoi = "", hauto = "";
 do {
  ty = so%1000000000;
  so = Math.floor(so/1000000000);
  if (so>0) {
   chuoi = dochangtrieu(ty,true) + hauto + chuoi;
  } else {
   chuoi = dochangtrieu(ty,false) + hauto + chuoi;
  }
  hauto = " tỷ";
 } while (so>0);
 return chuoi;
}

console.log(docso(152563));