/*Q.4 take input from the user in lowercase 
show the upper case to the display 

input 
white

output
WHITE

note: show to display not console */
const lowerToUpper = () => {

    let inputString = document.getElementById('textInput').value;

    let outputElement = document.getElementById('result');
    outputElement.innerHTML = '';

    for (let i = 0; i < inputString.length; i++) {
        outputElement.innerHTML += inputString[i].toUpperCase();
    }
    document.getElementById('result').innerHTML = outputElement.innerHTML;
}