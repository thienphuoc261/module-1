function outputPrimeNumber (){
    var start = 2;
    var a = 0;
    var b = 1;
    var c = a + b;
    var num = parseInt(document.getElementById("num").value);
    var count = 0;
    var result = "";
    while (count < num) {
            c = a + b;
            result += "<br>" + c;
            a = b;
            b = c;
        count++;
    }
    document.getElementById("result").innerHTML = result + "<br>"
}