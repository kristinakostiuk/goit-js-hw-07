const form = document.querySelector(".login-form");

const formEL = event => {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value.trim();
    console.log("userEmail:", userEmail);
    const userPassword = event.currentTarget.elements.password.value.trim();
    console.log("userPassword:", userPassword);
    if (userEmail === "" || userPassword === "") {
        alert("All form fields must be filled in")
    }
    
    const info = {
        email: userEmail,
        password: userPassword,
    }
    console.log("info:", info);

    event.currentTarget.reset();
}

form.addEventListener("submit", formEL)