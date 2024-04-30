
const printArray = () => {

    var inputString = document.getElementById('arrayInput').value;


    var outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        outputElement.innerHTML += arr[i] + "<br>";
    }
};