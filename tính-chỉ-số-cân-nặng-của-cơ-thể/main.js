function BMI ()
{
    let weight = +parseFloat(document.getElementById('wei').value);
    let height = +parseFloat(document.getElementById('hei').value);
    let BMI = weight / (height * height);
    let kq;
    if (BMI < 18.5)
    {
        kq = "You are underweight"
    } else if (18.5 <= BMI < 25)
    {
        kq = "You are normal"
    } else if (25 <= BMI < 30)
    {
        kq = "You are overweight"
    } else if (BMI >= 30)
    {
        kq = "You are obese !!!"
    }
    document.getElementById('kq').innerHTML = kq
}