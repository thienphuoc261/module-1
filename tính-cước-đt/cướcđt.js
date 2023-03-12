function calculateBill() {
    let callTime = document.getElementById("call-time").value;
    let callFrequency = document.getElementById("call-frequency").value;
    let totalBill;
    if(callTime <= 100 && callFrequency <= 30) {
        totalBill = callTime * 1500;
    } else if(callTime > 100 && callFrequency <= 30) {
        totalBill = 100 * 1500 + (callTime - 100) * 1200;
    } else if(callTime <= 100 && callFrequency > 30) {
        totalBill = callTime * 1400 * callFrequency;
    } else {
        totalBill = 100 * 1400 * callFrequency + (callTime - 100) * 1200 * callFrequency;
    }
    document.getElementById("total-bill").value = totalBill;
}