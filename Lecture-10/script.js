let student = []

const studentData1 = (index) => {
    student.splice(index, 1)
    studentinfo();
}

const studentinfo = () => {
    document.getElementById("Tbody").innerHTML = ""
    student.map((ele, i) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = ele.Name
        let td2 = document.createElement("td")
        td2.innerHTML = ele.Course
        let td3 = document.createElement("td")
        td3.innerHTML = ele.Grid

        let td4 = document.createElement("td")
        td4.innerHTML = "Delete"
        td4.addEventListener("click", () => studentData1(i))
        tr.append(td1, td2, td3, td4)
        document.getElementById("Tbody").append(tr)
    })

    p = document.getElementById("total").innerHTML = `total ${student.length}`
}

const addStudentData = (e) => {
    e.preventDefault();
    let data = {
        Name: document.getElementById("Name").value,
        Course: document.getElementById("Course").value,
        Grid: document.getElementById("Grid").value,
    }
    console.log(data);
    student.push(data);
    console.log(student.length);
    studentinfo();
}
const studentDataDelet = (e) => {
    document.getElementById("Tbody").innerHTML = ""
    student = []
}
let form = document.getElementById("studentData")
form.addEventListener("submit", addStudentData);

