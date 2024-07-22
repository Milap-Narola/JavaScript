import navbar from "../components/navbar.js";

let userdetails = localStorage.getItem("loggedInUser");
let isLogin = userdetails || false;

document.getElementById('navbar').innerHTML = navbar(isLogin ? "logout" : "", userdetails);

if (!isLogin) {
    // window.location.href = "/Exam/html/signup.html";
}

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

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

const handleDelete = (index) => {
    cartList.splice(index, 1);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    Mapper(cartList);
};

const handleQty = (index, opr) => {
    if (opr === "+") {
        cartList[index].qty += 1;
    } else {
        cartList[index].qty === 1 ? handleDelete(index) : cartList[index].qty -= 1;
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));
    Mapper(cartList);
};

Mapper(cartList);
