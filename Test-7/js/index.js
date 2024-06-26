import navbar from "../components/Navbar.js";

let userdetails = JSON.parse(localStorage.getItem("user"));

let isLogin = localStorage.getItem("isLogin") || false;

if (!isLogin) {
    
    window.location.href = "/Test-7/html/signup.html"
}


// console.log(navbar());

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}
