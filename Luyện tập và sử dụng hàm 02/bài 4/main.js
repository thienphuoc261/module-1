function check(input){
    if(isNaN(input)){
        return false;
    } else {
        return true;
    }
}
let input = prompt("Nhập ký tự:");
let output = check(input);
console.log(output);