function tinhGiaiThua(input){
    let result = 1;
    for(let i = 1; i <= input; i++){
        result *= i;
    }
    return result;
}

let input = parseInt(prompt("Nhập một số:"))
let output = tinhGiaiThua(input);
document.write("Giai thừa của " + input + " là " + output);