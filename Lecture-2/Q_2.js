/*Q.2 firstly you have to create one variable and give any name
then you have to make it a cube 
input 
2
output
8  */



const prompt = require("prompt-sync")({ sigint: true });


var input = prompt("Enter a number:");

var num = parseInt(input);


var cube = num * num * num;


console.log("The cube of " + num + " is: " + cube);
