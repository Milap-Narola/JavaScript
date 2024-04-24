/*Q.3 create a variable give a name, number then assign a value then after you have the check and print it 
if the value is odd print it's an odd number else it's an even number
input
4
output 
it's an even number
 */
function oddEven(n) {


    if (n % 2 === 0) {
        console.log("It's An Even Number", n);
    } else {
        console.log("It's An odd Number", n);
    }

}

const n = parseInt(process.argv[2]);
oddEven(n);