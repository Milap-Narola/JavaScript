import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()

import { createUser, isExists } from '../components/userApi.js';

const handleUser = async (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        admin_user: document.getElementById('role').value,

    }
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("isLogin", true);

    // console.log(user)
    createUser(user);

    isExists(user);

}

document.getElementById('signUp').addEventListener('submit', handleUser);

