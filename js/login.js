const form_login = document.getElementById("form-login");
form_login.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = {
        Username: form_login.username.value,
        Password:form_login.password.value
    };
    const get_user = JSON.parse(localStorage.getItem(form_login.username.value))
    if (get_user)
    {
        if (get_user.Username === user.Username && get_user.Password === user.Password)
        {
            alert("Login Successful!");
            window.location.href = "../index.html"
        } 
        else 
        {
            alert("invalid Email or Password");
        }
    } 
    else
    {
        alert("invalid Email or Password");
    }
});