function compareNumber (a, b){
    let c = a + b;
    let result1 = "";
    if (a < b){
        result1 = " a bé hơn b " + "<br>" + " Tổng là: " + c;
        return result1;
    } else if (a > b){
        result1 = " a lớn hơn b " + "<br>" + " Tổng là: " + c;
        return result1;
    } else {
        result1 = " a bằng b " + "<br>" + " Tổng là: " + c;
        return result1;
    }
} 

let a = parseInt(prompt("Nhập a: "));
let b = parseInt(prompt("Nhập b: "));
let c = a + b;
let result2 = compareNumber(a, b);
document.write(result2);
