function changingmoney()
{
    let money = document.getElementById('cash').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let result;
    if (from == "VND" && to == "USD")
    {
        result = money / 23500 + "$";
    } else if(from == "USD" && to == "VND")
    {
        result = money * 23500 + "Đ";
    }    
    document.getElementById('result').innerHTML= result;
}