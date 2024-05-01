/*Q.7 var number =7;
you have to write a logic to square it
input 
7
output 
49  */


const prompt = require("prompt-sync")({ sigint: true });


let input = prompt("Enter a number:");

let num = parseInt(input);


let square = num * num;


console.log("The square of " + num + " is: " + square);



