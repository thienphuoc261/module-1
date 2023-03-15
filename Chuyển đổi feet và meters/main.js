function footToMeter (foot){
    let meter = 0.305 * foot;
    return meter;
}

function meterToFoot (meter){
    let foot = 3.279 * meter;
    return foot;
}

var meterBefore = parseInt(prompt("Nhập meter: "))
var footAfter = meterToFoot(meterBefore);
document.write(meterBefore + " m" + " = " + footAfter + " foot");
document.write("<br>")

var footBefore = parseInt(prompt("Nhập foot "))
var meterAfter = footToMeter(footBefore);
document.write(footBefore + " foot" + " = " + meterAfter + " meter");

