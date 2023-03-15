function kiemTraSNT (isprime) {
    var flag = true;
    if (isprime < 2){
        flag = false;
    } else {
        for (let i = 2; i < (isprime - 1); i++){
            if (isprime % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        document.write(isprime + " là số nguyên tố");
    } else {
        document.write(isprime + " không phải là số nguyên tố");
    }
}
var checkSNT = parseInt(prompt("Nhập số nguyên:"));
var checkSNT = kiemTraSNT(checkSNT);


