/*Q.10 var number=4
You are given a number, stored in a variable with the name number. Perform the following operations on the value stored in the number,
Multiply the value by 3,
Add 7 after it,
Subtract 10 from it,

After performing all the above operations, print the updated value
sample input
4
sample output
9  */

const prompt = require("prompt-sync")({ sigint: true });


let input = prompt("Enter a number:");

let num = parseInt(input);

num += 7;
num *= 3;
num -= 10;


console.log(num);