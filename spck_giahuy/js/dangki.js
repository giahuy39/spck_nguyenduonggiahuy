// Hàm băm mật khẩu bằng SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Hàm đăng ký người dùng
async function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        document.getElementById('message').textContent = 'Vui lòng điền đầy đủ thông tin!';
        document.getElementById('message').style.color = 'red';
        return;
    }

    // Băm mật khẩu
    const hashedPassword = await hashPassword(password);

    // Tạo đối tượng người dùng
    const user = {
        username: username,
        email: email,
        password: hashedPassword
    };

    // Lưu vào localStorage
    localStorage.setItem('user', JSON.stringify(user));

    document.getElementById('message').textContent = 'Đăng ký thành công!';
    document.getElementById('message').style.color = 'green';
    console.log('Thông tin người dùng đã lưu:', user);
}

// Hiển thị thông tin khi tải trang
window.onload = function() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Người dùng đã lưu:', user);
    }
}
