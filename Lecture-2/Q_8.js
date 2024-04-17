/*Q.8 var number =2
You are given a number stored in a variable, with the name number , Multiply the number stored in the variable number by 50, and print the result obtained
input 
2
output
100 */



const prompt = require("prompt-sync")({ sigint: true });


var input = prompt("Enter a number:");

var num = parseInt(input);


var Multiply = num * 2;


console.log("Multiply of " + num +  " by 2 is: " + Multiply);
