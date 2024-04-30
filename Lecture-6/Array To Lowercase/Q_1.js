
function wordToLower(word) {
    return word.toLowerCase();
}

function arrayToLower(array) {
    return array.map(wordToLower);
}

const arrayToLowerCase=()=> {

    var inputString = document.getElementById("inputString").value;


    var inputArray = inputString.split(" ");


    var lowercaseArray = arrayToLower(inputArray);


    var outputString = lowercaseArray.join(" ");


    document.getElementById("output").innerText = outputString;
}
