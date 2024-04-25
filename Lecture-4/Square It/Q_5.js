/*Q.5 var number =7;
you have to write a logic to square it
input 
7
output 
49 */
const squareIt = () => {

    let number = document.getElementById("numberInput").value;
    let square = number * number;

    document.getElementById("result").innerText = "The Square Of -" + number + "-is : " + square;

}
