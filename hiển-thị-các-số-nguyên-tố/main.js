function calculating(){
    var startN = 2; //số bắt đầu
    var count = 0; //số lượng SNT đã in ra
    var number =  parseInt(document.getElementById("int").value); //số lượng SNT cần in ra
    var result = "";
    while (count < number){
        var flag = true;
         for(var i = 2; i <= Math.sqrt(startN); i++){
            if (startN % i == 0){
                flag = false;
                break;
            } 
        }
        if (flag){
            result += startN +" <br>";
            count++;
        }
        startN++;
    }
    document.getElementById("result").innerHTML = result;
}