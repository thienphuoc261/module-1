function tinhThue() {
    var thuNhap = document.getElementById("thuNhap").value;
    var thue;
    if (thuNhap <= 5000000){
        thue = 0;
    } else if (thuNhap <= 10000000){
        thue = (thuNhap - 5000000) * 0.1;
    } else if (thuNhap <= 18000000){
        thue = 500000 + (thuNhap - 10000000) * 0.15;
    } else if (thuNhap <= 32000000){
        thue = 1500000 + (thuNhap - 18000000) * 0.2;
    } else if (thuNhap <= 52000000) {
        thue = 3500000 + (thuNhap - 32000000) * 0.25;
      } else if (thuNhap <= 80000000) {
        thue = 7500000 + (thuNhap - 52000000) * 0.3;
      } else {
        thue = 19500000 + (thuNhap - 80000000) * 0.35;
      }
      document.getElementById("ketQua").innerHTML = "Thuế thu nhập cá nhân của bạn là: " + thue.toFixed(2) + " đồng.";
}