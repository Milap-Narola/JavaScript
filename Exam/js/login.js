import navbar from "../components/navbar.js";
import { login } from "../components/user.api.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    let user =
    {
        username: document.getElementById('userName').value,
        password: document.getElementById('password').value,
    };

    user = await login(user);

});
