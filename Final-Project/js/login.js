import navbar from "../components/navbar.js";
import { login } from "../components/user.api.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    let user =
    {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    if (user => user.username === username && user.password === password) {
        login(user)
        document.getElementById('navbar').innerHTML = navbar(user.username);
        window.location.href = '/Final-Project/html/index.html';
    }
    else {
        alert('Invalid username or password');
        window.location.href = '/Final-Project/html/signup.html';
    }


});
