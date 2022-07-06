// Viết hàm đảo ngược ký tự của từng từ trong một câu	
// một mảng string chứa các từ, các từ ngăn cách nhau bằng dấu cách	
// mảng chuỗi ký tự giữ nguyên vị trí của các từ nhưng đảo ngược các ký tự trong từng từ


let org_str = 'Qua la sen';
let reverse_str = org_str.split('').reverse().join('');
console.log(reverse_str);
