const poptoString = () => {

    const inputArray = document.getElementById("numInput").value;
    
    const array = inputArray.split(",").map(Number);

    const poppedElement = array.pop();

    document.getElementById("output").innerText = array.join(", ");

    document.getElementById("poppedElement").innerText = poppedElement;
}