function commissionRate (){
    let commissionRate;
    let salesAmount = document.getElementById("salesamount").value;

    if (salesAmount < 100000){
        commissionRate = 0.02;
    } else if (salesAmount < 500000){
        commissionRate = 0.05;
    } else if (salesAmount < 1000000){
        commissionRate = 0.07;
    } else {
        commissionRate = 0.1;
    } 
    var commission = salesAmount * commissionRate;
    document.getElementById("result").innerHTML = commission + "VNĐ";
}