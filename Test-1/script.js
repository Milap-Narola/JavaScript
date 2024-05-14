let Employee = []

const EmployeeData = (index) => {
    Employee.splice(index, 1)
    EmployeeInfo1()
}
const EmployeeInfo1 = () => {
    document.getElementById("Data").innerHTML = ""

    Employee.map((ele, i) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.name

        let td2 = document.createElement("td")
        td2.innerHTML = ele.jRole

        let td3 = document.createElement("td")
        td3.innerHTML = ele.Dpartment

        let td4 = document.createElement("td")
        td4.innerHTML = ele.number

        let td5 = document.createElement("td")
        td5.innerHTML = ele.number2

        let td6 = document.createElement("td")
        td6.innerHTML = ele.contact



        td7 = document.createElement("td")
        td7.innerHTML = "Delete"

        td7.addEventListener("click", () => EmployeeData(i))
        tr.append(td1, td2, td3, td4, td5, td6, td7)
        document.getElementById("Data").append(tr)
    })
   let p = document.getElementById("Total").innerHTML = `Total${Employee.length}`
}
const Employeeinfoo = (e) => {
    e.preventDefault()
    let data = {
        name: document.getElementById("name").value,
        jRole: document.getElementById("jRole").value,
        Dpartment: document.getElementById("Dpartment").value,
        number: document.getElementById("number").value,
        number2: document.getElementById("number2").value,
        contact: document.getElementById("contact").value,
    }
    console.log(data)
    Employee.push(data);
    EmployeeInfo1()
}
const EmployeeDelet = (e) => {
    document.getElementById("Data").innerHTML = ""
    Employee = []
}
let form = document.getElementById("Employeeinfo")
form.addEventListener("submit", Employeeinfoo)

