// Viết hàm in ra n số đầu tiên trong chuỗi fibonaci
//f(1)=1, f(2)=1, f(3)=2 với n > 2 ta được: f(n) = f(n-1) + f(n-2).

let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= 5) {
    // print the next term
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
