function login ()
{
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if ((user === "thienphuoc261") && (pass === "thienphuoc"))
    {
        alert("Hello boss")
    } else if ((user == null) || (pass == null))
    {
        alert("Vui lòng đúng tên đăng nhập và mật khẩu")
    } else 
    {
        alert("Sai tên đăng nhập hoặc mật khẩu")
    }
}