/*Q.5you have to input the number stored in a variable with the name num
You have to print RED and WHITE, as many times as the number stored in the variable num
Every time, print RED and WHITE on a new line
sample input: 5
Sample Output :
RED and WHITE
RED and WHITE
RED and WHITE
RED and WHITE
RED and WHITE */
const printRnw = () => {

    let num = (document.getElementById("numInput").value);

    let outputDiv = document.getElementById("output");

    for (let i = 0; i < num; i++) 
    {
        outputDiv.innerHTML += "Red N White <br>";

    }
}