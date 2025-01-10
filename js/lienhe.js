const form_register = document.getElementById("form-register");
form_register.addEventListener("submit", (event) => {
    event.preventDefault();
    let newUser = {
        Username: form_register.username.value,
        Email: form_register.email.value,
        Password:form_register.password.value
    };
    const get_user = JSON.parse(localStorage.getItem(form_register.username.value))
    if (get_user)
    {
        if (get_user.Username === newUser.Username)
        {
            alert("Username already existed!");
        } 
    }
    else 
    {
        localStorage.setItem(form_register.username.value, JSON.stringify(newUser))
        alert("Register Successful!");
        window.location.href = "../index.html"
    }
});