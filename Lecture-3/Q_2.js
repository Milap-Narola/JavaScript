/*Q.2 finds the largest of three number by using “>” and “&&” operator in JavaScript.
Print num1 is the largest if num1>num2 and num1>num3.Print
 num2 is the largest if num2<num3.Else print num3. */
let num1 = 10;
let num2 = 33;
let num3 = 12;
let max;
if (num1 > num2 && num1 > num3) {
    max = num1;
}
else if (num2 > num1 && num2 > num3) {
    max = num2;
}
else {
    max = num3;
}
console.log("Num Is largest", max);