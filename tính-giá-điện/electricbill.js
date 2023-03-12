function calculateElectricBills () {
    var soDien = document.getElementById("electric-used").value;
    var giaDien;
    if (soDien <= 50){
        giaDien = soDien * 1484;
    } else if (soDien <= 100){
        giaDien = 50 * 1484 + (soDien - 50) * 1533;
    } else if (soDien <= 200){
        giaDien = 50 * 1484 + 50 * 1533 + (soDien - 100) * 1786;
    } else if (soDien <= 300){
        giaDien = 50 *1484 + 50 * 1533 + 100 * 1786 + (soDien - 100) * 1905;
    } else {
        giaDien = 50 *1484 + 50 * 1533 + 100 * 1786 + 100 * 1905 + (soDien - 100) * 2201;
    }
    document.getElementById("result").innerHTML = "Giá điện của bạn là:" + giaDien.toFixed(2) + "Đ";
}