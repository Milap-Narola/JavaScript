const findMax = () => {
    let input = document.getElementById("numInput").value;
    let numArray = input.split(",").map(Number);

    let max = numArray[0];

    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }

    document.getElementById("output").innerText = "The MAX : " + max;
}