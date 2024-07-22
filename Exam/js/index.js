
import navbar from "../components/navbar.js";

let userdetails =JSON.stringify(localStorage.getItem("loggedInUser"));

let isLogin = localStorage.getItem("loggedInUser") || false;

if (!isLogin) {
    
    window.location.href = "/Exam/html/login.html"
}


// console.log(navbar());

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails)
}
else {
    
    document.getElementById("navbar").innerHTML = navbar()
}