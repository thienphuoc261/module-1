//Bài 1:
let myColor = ["red", "green", "white", "black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));

//Bài 2:
const num = window.prompt("Nhập một số nguyên:");
const str = num.toString();
const result1 = [str[0]];

for(let x = 1; x < str.length; x++){
    if((str[x-1] % 2 === 0) && (str[x % 2 === 0])){
        result1.push("-", str[x]);
    } else {
        result1.push(str[x]);
    }
}
console.log(result1.join("-"));

//Bài 3:
let str1 = "c";
let UPPER = "ABCDEF";
let LOWER = "abcdef";
let result = [];

for(let x = 0; x < str1.length; x++){
    if(UPPER.indexOf(str1[x]) !== -1){
        result.push(str1[x].toLowerCase());
    } else if(LOWER.indexOf(str1) !== -1){
        result.push(str1[x].toUpperCase());
    } else {
        result.push(str1[x]);
    }
}
console.log(result.join(''));