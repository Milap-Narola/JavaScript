const findMin = () => {
    let input = document.getElementById("numInput").value;
    let numArray = input.split(",").map(Number);

    let min = numArray[0];

    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }

    document.getElementById("output").innerText = "The Minumum : " + min;
}