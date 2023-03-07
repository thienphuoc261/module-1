function average ()
{
let ly = parseInt(document.getElementById('a').value);
let hoa = parseInt(document.getElementById('b').value);
let sinh = parseInt(document.getElementById('c').value);
let dtb = (ly + hoa + sinh)/3;
document.getElementById('dtb').innerHTML = dtb;
}
function temparature ()
{
    let cel = parseInt(document.getElementById('Cel').value);
    let f = (1.8*cel) + 32;
    document.getElementById('fah').innerHTML = f;
}
function cands ()
{
    let R = parseFloat(document.getElementById('R').value);
    let C = 2 * R * 3.14
    let S = R * R * 3.14
    document.getElementById('circuit').innerHTML = C;
    document.getElementById('square').innerHTML = S;
}