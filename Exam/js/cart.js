import navbar from "../components/navbar.js";

// Get user details and setup navbar
let userdetails = localStorage.getItem("loggedInUser");
let isLogin = !!userdetails;

document.getElementById('navbar').innerHTML = navbar(isLogin ? "logout" : "", userdetails);

if (!isLogin) {
    // Redirect if not logged in
    // window.location.href = "/Exam/html/signup.html";
}

// Initialize cart list from localStorage
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

// Function to update the cart display
const Mapper = (cartList) => {
    const list = document.getElementById("list");
    list.innerHTML = "";
    
    cartList.forEach((cart, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${cart.image}" id="img" alt="${cart.foodName}"></td>
            <td>${cart.foodName}</td>
            <td>${cart.calories}</td>
            <td>${cart.price}</td>
            <td>
                <button onclick="handleQty(${i}, '-')">-</button>
                <button>${cart.qty}</button>
                <button onclick="handleQty(${i}, '+')">+</button>
            </td>
            <td>${cart.price * cart.qty}</td>
            <td><button onclick="handleDelete(${i})">Remove</button></td>
        `;
        list.append(tr);
    });
};

// Function to handle item deletion
const handleDelete = (index) => {
    cartList.splice(index, 1);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    Mapper(cartList);
};

// Function to handle quantity changes
const handleQty = (index, opr) => {
    if (opr === "+") {
        cartList[index].qty += 1;
    } else {
        if (cartList[index].qty === 1) {
            handleDelete(index);
            return;
        }
        cartList[index].qty -= 1;
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));
    Mapper(cartList);
};

// Attach functions to the global object so they can be accessed from inline HTML event handlers
window.handleDelete = handleDelete;
window.handleQty = handleQty;

// Initial call to display cart items
Mapper(cartList);
