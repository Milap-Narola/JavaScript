/* Q.3  finds the largest between two number by using “>” and “=” operator in JavaScript.
Print num1 is the largest if num1>num2.Print num2 is the largest 
if num1<num2.Else print num1 and num2 are equal when num1==num2.*/
let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log("Num1 Is Largest :", num1);
}
else if (num1 < num2) {
    console.log("Num2 Is largest :", num2);
}
else {
    console.log("Both Are Equal :", num1, num2);
}