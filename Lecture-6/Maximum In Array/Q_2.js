function findMax() {
    var input = document.getElementById("numInput").value;
    var numArray = input.split(",").map(Number);

    var max = numArray[0];

    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }

    document.getElementById("output").innerText = "The MAX : " + max;
}