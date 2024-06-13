import navbar from"../components/navbar.js";
import getValue from "../components/helper.js";

let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));
if (!isLogin) {
    window.location.href = "/Project-localstorage/pages/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}


let products = []

const handleData = (e) => {
    e.preventDefault();
    let product = {
        title: getValue("title"),
        price: getValue("price"),
        img: getValue("img"),
        category: getValue("category")
    }
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
}



document.getElementById("productsData").addEventListener("submit", handleData)