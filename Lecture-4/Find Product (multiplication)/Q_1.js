/*Q.1 /*Q.1 Calculate the product of the following numbers:
create 5 variables and give them names like one, two.........
Variable one:
Variable two:
Variable three:
Variable four:
Variable five:
Your task is to assign appropriate numerical values to each variable and compute their product. Write your answers */
// Assign numerical values to variables*/
const computeProduct=() => {

    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    let four = document.getElementById("four").value;
    let five = document.getElementById("five").value;


    let product = one * two * three * four * five;

    document.getElementById("Result").innerHTML = "The product of " + one + ", " + two + ", " + three + ", " + four + ", and " + five + " is: " + product;

}
