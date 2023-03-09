function months ()
{
    let month = parseInt(document.getElementById('month').value);
    let result; 
    switch (month){
        case (month = +1):
            result = "Tháng 1 có 31 ngày";
            break;
        case (month = +2):
            result = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        case (month = +3):
            result = "Tháng 3 có 31 ngày";
            break;
        case (month = +4):
            result = "Tháng 4 có 30 ngày";
            break;
        case (month = +5):
            result = "Tháng 5 có 31 ngày";
            break;
        case (month = +6):
            result = "Tháng 6 có 30 ngày";
            break;
        case (month = +7):
            result = "Tháng 7 có 31 ngày";
            break;
        case (month = +8):
            result = "Tháng 8 có 31 ngày";
            break;
        case (month = +9):
            result = "Tháng 9 có 30 ngày";
            break;
        case (month = +10):
            result = "Tháng 10 có 31 ngày";
            break;
        case (month = +11):
            result = "Tháng 11 có 30 ngày";
            break;
        case (month = +12):
            result = "Tháng 12 có 31 ngày";
            break;
        default:
            text = "Vui lòng nhập lại tháng"
    }
    document.getElementById('result').innerHTML = result;
}