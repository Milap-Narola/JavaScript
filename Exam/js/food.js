import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML = navbar();

let food = [];

const uiMaker = (data) => {
    data.forEach((ele) => {
        let img = document.createElement("img");
        img.src = ele.image;
        img.className = "image";
        let foodName = document.createElement("h3");
        foodName.innerHTML = ele.foodName;
        foodName.className = "foodName";

        let calories = document.createElement("h5");
        calories.innerHTML = ele.calories;
        calories.className = "calories";

        let price = document.createElement("h4");
        price.innerHTML = `Price: ${ele.price} Rs`;

        let orderBtn = document.createElement("button");
        orderBtn.innerHTML = "Order";
        orderBtn.className = "food-button";
        orderBtn.addEventListener("click", () => {
            let existingCart = JSON.parse(localStorage.getItem("cartList")) || [];
            let itemIndex = existingCart.findIndex(item => item.id === ele.id);
            
            if (itemIndex >= 0) {
                existingCart[itemIndex].qty += 1;
            } else {
                ele.qty = 1;
                existingCart.push(ele);
            }

            localStorage.setItem("cartList", JSON.stringify(existingCart));
            window.location.href = "/Exam/html/cart.html";
        });

        let div = document.createElement("div");
        div.className = "food-item";
        div.append(img, foodName, calories, price, orderBtn);

        document.getElementById("food-container").append(div);
    });
};

const foodFetch = async () => {
    let req = await fetch("https://json-server-deployment-1-0wec.onrender.com/foodItems");
    let res = await req.json();
    uiMaker(res);
};

foodFetch();
