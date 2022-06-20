//Viết hàm tìm vị trí một chuỗi trong một chuỗi khác
let string1 = 'Thành phố Hà Nội là thủ đô của Việt Nam';
let string2 = 'Hà Nội';
for (i = 0; i < string1.length; i++) {
    for (j = 0; j < string2.length; j++) {
        if(string1[i] === string2[0]) {
           console.log(i);
           break;  
        } 
    }
}

