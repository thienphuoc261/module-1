let value = prompt("Nhập một số");
let numbers = [-3 , 5, 1, 3, 2, 10];
for(let i = 0; i < numbers.length; i++){
    if(value == numbers[i]){
        alert("Giá trị " + numbers[i] + " ở vị trí " + i);
    }
}