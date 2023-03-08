function namnhuan ()
{
    let year = document.getElementById('year').value;
    let result;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
    {
        result = "Năm nhuận";
    } else
    {
        result = "Năm không nhuận";
    }
    document.getElementById('xuat').innerHTML = result;
}