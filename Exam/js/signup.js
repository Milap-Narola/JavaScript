import navbar from "../components/navbar.js";
import { createUser, getUser, isExists, } from '../components/user.api.js';
document.getElementById('navbar').innerHTML = navbar()


const handleUser = async (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        contact: document.getElementById('contactNo').value,
        city: document.getElementById('city').value

    }
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user)
    createUser(user);
    isExists(user);

}

document.getElementById('signUp').addEventListener('submit', handleUser);

