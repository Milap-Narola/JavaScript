/*Q.3 create a variable give a name, number then assign a value then after you have the check and print it 
if the value is odd print it's an odd number else it's an even number
input
4
output 
it's an even number
 */
const oddEven = () => {

    let number = document.getElementById("numberInput").value;
    if (number % 2 === 0) {
        document.getElementById("result").innerText = "It's An Even Number";
    } else {
        document.getElementById("result").innerText = "It's An odd Number";
    }

}
