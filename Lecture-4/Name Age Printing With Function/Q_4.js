/*Q.4 Create a variable name to store your name
Create a variable age to store your age
Print the values stored in the variable on one line followed by the type of the variable in the next line*/
const nameAge = () => {

    let name = document.getElementById("nameInput").value;
    let age = parseInt(document.getElementById("ageInput").value);
   document.getElementById("output").innerHTML= "Name: " + name + "<br>Type of Name: " + typeof name + "<br>Age: " + age + "<br>Type of Age: " + typeof age;

}

