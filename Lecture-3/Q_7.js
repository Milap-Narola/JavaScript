/*Q.7 suppose You have given a number, stored in a variable with the name N. Check if the number is divisible by 3 or not
If possible, print "Yes"
Else print "No"
Hint: 
A number can be divided into 3 parts, if the number is completely divisible by 3 that is,
 the answer to the operation number % 3 is zero
Sample Input 
6
Sample Output 1
Yes */
let n = number(process.args[n])

if (n % 6 == 0) {
    console.log("Yes", n);
} else {
    console.log("No", n);
}