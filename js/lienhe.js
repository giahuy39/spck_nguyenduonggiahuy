const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const phone = contactForm.tel.value;
    const message = contactForm.message.value;

    const newUser = {
        Username: name,
        Email: email,
        Phone: phone,
        Message: message
    };
    localStorage.setItem(name, JSON.stringify(newUser));
    alert("Cảm ơn bạn đã liên hệ.");
    window.location.href = "../index.html";
});