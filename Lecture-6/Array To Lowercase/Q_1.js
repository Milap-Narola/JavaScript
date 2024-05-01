
function wordToLower(word) {
    return word.toLowerCase();
}

function arrayToLower(array) {
    return array.map(wordToLower);
}

const arrayToLowerCase=()=> {

    let inputString = document.getElementById("inputString").value;


    let inputArray = inputString.split(" ");


    let lowercaseArray = arrayToLower(inputArray);


    let outputString = lowercaseArray.join(" ");


    document.getElementById("output").innerText = outputString;
}
