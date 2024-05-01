
const printArray = () => {

    let inputString = document.getElementById('arrayInput').value;


    let outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        outputElement.innerHTML += arr[i] + "<br>";
    }
};