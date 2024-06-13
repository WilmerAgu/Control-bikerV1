const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const validEmail = "manager@control-biker.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        window.location.href = "/public_html/assets/routes/registro.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});