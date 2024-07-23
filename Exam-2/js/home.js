import navbar from "../components/navbar.js"

let userdetails = JSON.stringify(localStorage.getItem("user"));

let isLogin = localStorage.getItem("loggedInUser") || false;

if (!isLogin) {

    window.location.href = "/Exam-2/html/login.html"
}


// console.log(navbar());

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
}
else {

    document.getElementById("navbar").innerHTML = navbar()
}


const CourseGet = async () => {
    let req = await fetch("http://localhost:3000/course")
    let res = await req.json()
    uiMaker(res)
}

CourseGet()

const uiMaker = (data) => {
    document.getElementById("courseContainer").innerHTML = ""
    data.map((ele) => {
        let name = document.createElement("h3")
        name.innerHTML = ele.name

        let image = document.createElement("img")
        image.src = ele.image

        let price = document.createElement("h3")
        price.innerHTML = 'price : $' + ele.actual_price_usd;


        let category = document.createElement("h4")
        category.innerHTML = ele.category

        let description = document.createElement("p")
        description.inertia = ele.description

        let div = document.createElement("div")
        div.append(name, image, price, category, description)

        document.getElementById("courseContainer").append(div)
    })
}


const courseFetch = async () => {
    try {
        const response = await fetch('http://localhost:3000/course');
        if (!response.ok) {
            throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        return [];
    }
}

function sortByName(course) {
    return [...course].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}


function sortByPrice(course) {
    return [...course].sort((a, b) => a.actual_price_usd - b.actual_price_usd);
}


function sortByPopularity(course) {
    return [...course].sort((a, b) => b.rating - a.rating);
}


document.getElementById('sortByNameBtn').addEventListener('click', async () => {
    const course = await courseFetch();
    const sortedCourse = sortByName(course);
    uiMaker(sortedCourse);
});

document.getElementById('sortByPriceBtn').addEventListener('click', async () => {
    const course = await courseFetch();
    const sortedCourse = sortByPrice(course);
    uiMaker(sortedCourse);
});

document.getElementById('sortByPopularityBtn').addEventListener('click', async () => {
    const course = await courseFetch();
    const sortedCourse = sortByPopularity(course);
    uiMaker(sortedCourse);
});
document.getElementById("searchValue").addEventListener('input', async (e) => {
    e.preventDefault()
    let input = document.getElementById("searchValue").value
    console.log(input);
    let response = await fetch('http://localhost:3000/course');

    let data = await response.json();
    console.log(data);
    let filter = data.filter(elm => elm.name.includes(input))
    uiMaker(filter)
})