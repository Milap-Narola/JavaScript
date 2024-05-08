
let student = [];

const addStudentData = (e) => {

    e.preventDefault();

    // let name = document.getElementById("name").value
    // let course = document.getElementById("course").value
    // let grid = document.getElementById("grid").value
    // console.log("name");

    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value,
    }

    console.log(data);

    //     let data={
    //         name,
    //         course,
    //         grid,
    //     }
    //    console.log(data);

    student.push(data);

    console.log(student);

    uiMaker();
}

document.getElementById("studentData").addEventListener("submit", addStudentData);

const uiMaker = () => {

    document.getElementById("studentList").innerHTML = ""

    for (let i = 0; i < student.length; i++) {

        let name = document.createElement("h1")
        name.innerHTML = student[i].name
        document.getElementById("studentList").append(name)

        let course = document.createElement("h1")
        course.innerHTML = student[i].course
        document.getElementById("studentList").append(course)

        let grid = document.createElement("h1")
        grid.innerHTML = student[i].grid
        document.getElementById("studentList").append(grid)
    }
}