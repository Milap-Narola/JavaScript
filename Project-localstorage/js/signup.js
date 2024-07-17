import navbar from "../components/Navbar.js";
import getValue from "../components/helper.js";



const handleData = (e) => {
    e.preventDefault();
    let user = {
        username: getValue("username"),
        password: getValue("password")
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLogin", true)
    window.location.href = "/Project-localstorage/pages/login.html"

}


document.getElementById("Userdata").addEventListener("submit", handleData)



document.getElementById("navbar").innerHTML =navbar()