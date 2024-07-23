import navbar from "../components/navbar.js"

let userdetails = JSON.parse(localStorage.getItem("user"));

let isLogin = localStorage.getItem("loggedInUser") || false;

if (!isLogin) {
    window.location.href = "/Exam-2/html/login.html";
}

if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username);
} else {
    document.getElementById("navbar").innerHTML = navbar();
}

const CourseGet = async () => {
    let req = await fetch("https://json-server-deployment-6.onrender.com/course");
    let res = await req.json();
    uiMaker(res);
}

CourseGet();

const uiMaker = (data) => {
    document.getElementById("courseContainer").innerHTML = "";
    data.map((ele) => {
        let name = document.createElement("h3");
        name.innerHTML = ele.name;

        let image = document.createElement("img");
        image.src = ele.image;

        let price = document.createElement("h3");
        price.innerHTML = 'Price: $' + ele.actual_price_usd;

        let category = document.createElement("h4");
        category.innerHTML = ele.category;

        let description = document.createElement("p");
        description.innerHTML = ele.description;
        description.style.height = '5rem'
        description.style.overflow = 'hidden';

        let incrementBtn = document.createElement("button");
        incrementBtn.innerHTML = "+";
        incrementBtn.addEventListener("click", () => updateCourseQuantity(ele.id, 1));

        let decrementBtn = document.createElement("button");
        decrementBtn.innerHTML = "-";
        decrementBtn.addEventListener("click", () => updateCourseQuantity(ele.id, -1));

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => deleteCourse(ele.id));

        let div = document.createElement("div");
        div.append(name, image, price, category, description, incrementBtn, decrementBtn, deleteBtn);

        document.getElementById("courseContainer").append(div);
    });
}

const courseFetch = async () => {

    const response = await fetch('https://json-server-deployment-6.onrender.com/course');

    const data = await response.json();
    return data;

}

const addCourse = async (course) => {

    const response = await fetch('https://json-server-deployment-6.onrender.com/course', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    });

    const newCourse = await response.json();
    const courses = await courseFetch();
    uiMaker(courses);
}

const updateCourseQuantity = async (id, increment) => {

    const response = await fetch(`https://json-server-deployment-6.onrender.com/course?course=${id}`);
    const course = await response.json();
    course.quantity = (course.quantity || 1) + increment;

    if (course.quantity <= 0) {
        await deleteCourse(id);
        return;
    }

    await fetch(`https://json-server-deployment-6.onrender.com/course?course=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
    });

    const courses = await courseFetch();
    uiMaker(courses);

}

const deleteCourse = async (id) => {

    await fetch(`https://json-server-deployment-6.onrender.com/course?course=${id}`, {
        method: 'DELETE',
    });

    const courses = await courseFetch();
    uiMaker(courses);
}
document.getElementById("addCourseForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const course = {
        name: document.getElementById("courseName").value,
        image: document.getElementById("courseImage").value,
        actual_price_usd: document.getElementById("coursePrice").value,
        category: document.getElementById("courseCategory").value,
        description: document.getElementById("courseDescription").value,
    };
    await addCourse(course);
    e.target.reset();
});
