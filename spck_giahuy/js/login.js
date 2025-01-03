// 

async function loginUser(inputUsername, inputPassword) {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
        console.log('Không tìm thấy thông tin người dùng.');
        return;
    }

    const user = JSON.parse(storedUser);
    const hashedInputPassword = await hashPassword(inputPassword);

    if (user.username === inputUsername && user.password === hashedInputPassword) {
        console.log('Đăng nhập thành công!');
    } else {
        console.log('Tên người dùng hoặc mật khẩu sai.');
    }
}
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let get_username = form.username.value;
    let get_password = form.password.value;

    let get_user =  JSON.parse(localStorage.getItem(form.username.value))
    if(get_user)
    {
       if (get_password == get_user.password)
        {
            alert("let go");
            window.location = "../index.html";
        }
        else
        {
            alert("sai ten hoac mat khau")
        }
    }
    else
    {
        alert("sai ten hoac mat khau")
    }
}) 
loginUser('TênNgườiDùng', 'MậtKhẩu');



