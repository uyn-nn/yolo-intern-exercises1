/*
Logical AND (&&)
false && false: false, false && true: false
true && false: false, true && true: true

Logical OR (||)
false || false: false, false || true: true
true || false: true, true || true: true

16 -"Chuỗi logic sau trả về true hay false
((5<6) || (4<2)) && (21<20 && 13 < 11) && false"	
(false && false && false)--> false	 

17 - "Chuỗi logic sau trả về true hay false
((true && false) || (false && false)) && (false || true)"	
(false || false && true)--> false	

18 - "Chuỗi logic sau trả về true hay false
((true || false) && (true || false)) || (true && false)"	
(true && true ||false)--> true

19 - "Chuỗi logic sau trả về true hay false ( ! là ngược lại ví dụ !true = false và !false = true)
!(!(true || false) && (!true && false)) && (true && !false)"	
(!(false && false)&&true)-->	true

sự khác nhau giữa i++ và ++i (i là một số nguyên)		
i++ in ra giá trị trước sau đó mới tăng giá trị của i lên. 
++i tăng giá trị của i lên trước sau đó mới in giá trị của i ra


20 - "Đoạn code sau có vấn đề gì
for(var i=0; i<10; i--) { 
    print(i); 
}"		Chạy vòng lặp vô tận 
21 - "Đoạn code sau trả về giá trị bao nhiêu 
(% là toán tử lấy số dư, ví dụ 3%2 = 1)
int total = 0;
for(int i=0; i<11; i++) {
   if(i %2 == 0) {
       total += 1;
   } else {
       total += 2;
   }
}
return total;"		Kết quả = 16

*/ 