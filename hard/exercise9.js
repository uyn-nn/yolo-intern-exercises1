// Viết hàm tình tổng số lần xuất hiện của một string a trong string b	
// string a, string b --> số lần string a xuất hiện trong string b
let appear = 0;
function count(string1, string2) {
    for ( let i = 0; i < string1.length; i++ ) {
        let count = 0;
        if (string1[i] == string2[0]) {
            for ( let j = i; j < i + string2.length; j++ ) {
                if ( string1[j] === string2[j-i]){
                    count++;
                }
                if (count === string2.length) {
                    appear++;
                }
            }
        }
    }
    return appear;
}
console.log(count('ha noi ha ha la thu do', 'ha'));