/*Q.7 var number =2
You are given a number stored in a variable, with the name number
Multiply the number stored in the variable number by 50, and print the result obtained
input 
2
output
100 */

const multiplyByFifty = () => {

    let number = parseInt(document.getElementById("numberInput").value);

    let result = number * 50;

    document.getElementById("result").innerText = "This is A Total:" + result;
}

