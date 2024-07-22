import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar()


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
        price.innerHTML = `price: ${ele.price}Rs`;

        let orderBtn = document.createElement("button");
        orderBtn.innerHTML = "Order";
            orderBtn.className = "food-button";

        let div = document.createElement("div");
        div.className = "food-item";
        div.append(img, foodName, calories, price, orderBtn);

        document.getElementById("food-container").append(div);
    });
};

const foodApi = async () => {
    let req = await fetch("http://localhost:3000/foodItems")
    let res = await req.json()
    console.log(res);
    uiMaker(res)
}

foodApi()