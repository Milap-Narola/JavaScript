/*Q.5  suppose you have given two numbers, stored in variables with the names num1 and num2
Print the output of the following operation,
num1 > num2, this prints true if num1 is greater than num2, else it prints false
After this operation is performed, another number, stored in a variable with the name num3 is added to num1. After this,
 print the result of the following operation again,
num1 > num2, this prints true if num is greater than num2, else it prints false
Sample Input 
4 8 5
Sample Output 
false 
true*/
let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log(num1 > num2);


num1 += num3;
console.log(num1 > num2);