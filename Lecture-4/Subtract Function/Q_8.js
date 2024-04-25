/*Q.8 create a function give name subtract
pass 4 variables to the function and  print the output  */

const subtract=()=> {

    let one= document.getElementById("input1").value;
    let two= document.getElementById("input2").value;
    let three= document.getElementById("input3").value;
    let four = document.getElementById("input4").value;
    
    let result = one - two - three - four;
    
    document.getElementById("result").innerText = "Result of subtraction: " + result;


}
