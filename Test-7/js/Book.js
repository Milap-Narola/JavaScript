import navbar from "../components/Navbar.js";
let isLogin = localStorage.getItem("isLogin") || false;
let userdetails = JSON.parse(localStorage.getItem("user"));
if (!isLogin) {
    window.location.href = "/Test-7/html/signup.html"
}
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}


const bookingData = JSON.parse(localStorage.getItem("booking")) || [];

const handleDelete = (index) => {
    bookingData.splice(index, 1);
    localStorage.setItem("booking", JSON.stringify(bookingData)); // Corrected variable name here

    bookedData();
};

const handleQty = (index, opr) => {
    if (opr == "+") {
        bookingData[index].qty += 1;
    } else {
        if (bookingData[index].qty == 1) {
            handleDelete(index);
        } else {
            bookingData[index].qty -= 1;
        }
    }

    bookedData();
    localStorage.setItem("booking", JSON.stringify(bookingData)); 
};

const bookedData = () => {
    document.getElementById("list").innerHTML = ""; 

    if (bookingData.length === 0) {
        document.getElementById("list").innerHTML = "<p>You have not booked any tours.</p>";
        return;
    }

    bookingData.forEach((item, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");

        let image = document.createElement("img");
        image.src = item.image[0];
        td1.append(image);
        image.classList.add("Book-image");

        let td2 = document.createElement("td");
        td2.innerHTML = item.title;

        let td3 = document.createElement("td");
        td3.innerHTML = item.price;

        let btn1 = document.createElement("button");
        btn1.innerHTML = "-";
        let btn2 = document.createElement("button");
        btn2.innerHTML = item.qty;

        let btn3 = document.createElement("button");
        btn3.innerHTML = "+";

        btn1.addEventListener("click", () => handleQty(i, "-"));
        btn3.addEventListener("click", () => handleQty(i, "+"));

        let td5 = document.createElement("td");
        td5.append(btn1, btn2, btn3);

        let td6 = document.createElement("td");
        td6.innerHTML = `Cost: ${item.price * item.qty}`;

        let td7 = document.createElement("td");
        td7.innerHTML = "Delete";
        td7.style.cursor = "pointer";
        td7.addEventListener("click", () => handleDelete(i));

        tr.append(td1, td2, td3, td5, td6, td7);
        document.getElementById("list").append(tr);
    });
};

bookedData();
