function findMin() {
    var input = document.getElementById("numInput").value;
    var numArray = input.split(",").map(Number);

    var min = numArray[0];

    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }

    document.getElementById("output").innerText = "The Minumum : " + min;
}