/*Q.9 create a function give name sum 
pass 3 variables to the function and  print the output */
const sum = () => {
    let one = parseInt(document.getElementById("input1").value);
    let two = parseInt(document.getElementById("input2").value);
    let three = parseInt(document.getElementById("input3").value);
    let result =one +two+three;
    document.getElementById("result").innerText="Total Sum Of Below Numbers :"+result;
}

