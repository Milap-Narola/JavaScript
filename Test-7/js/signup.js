import navbar from "../components/Navbar.js";
import getValue from "../components/getValue.js";



const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("username"),
        email: getValue("email"),
        password: getValue("password")
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/Test-7/index.html";

}


document.getElementById("Userdata").addEventListener("submit", handleData)



document.getElementById("navbar").innerHTML =navbar()