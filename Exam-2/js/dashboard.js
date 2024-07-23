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
    let req = await fetch("http://localhost:3000/course");
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
    try {
        const response = await fetch('http://localhost:3000/course');
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching courses:', error);
        return [];
    }
}

const addCourse = async (course) => {
    try {
        const response = await fetch('http://localhost:3000/course', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });

        if (!response.ok) {
            throw new Error('Failed to add course');
        }

        const newCourse = await response.json();
        const courses = await courseFetch();
        uiMaker(courses);

    } catch (error) {
        console.error('Error adding course:', error);
    }
}

const updateCourseQuantity = async (id, increment) => {
    try {
        const response = await fetch(`http://localhost:3000/course/${id}`);
        const course = await response.json();
        course.quantity = (course.quantity || 1) + increment;
        
        if (course.quantity <= 0) {
            await deleteCourse(id);
            return;
        }

        await fetch(`http://localhost:3000/course/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });

        const courses = await courseFetch();
        uiMaker(courses);
    } catch (error) {
        console.error('Error updating course quantity:', error);
    }
}

const deleteCourse = async (id) => {
    try {
        await fetch(`http://localhost:3000/course/${id}`, {
            method: 'DELETE',
        });

        const courses = await courseFetch();
        uiMaker(courses);
    } catch (error) {
        console.error('Error deleting course:', error);
    }
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
