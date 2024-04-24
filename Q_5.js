/*Q.5 var number =7;
you have to write a logic to square it
input 
7
output 
49 */
function square(n) {

    n = n * n;
    return n;
}
const n = parseInt(process.argv[2]);
console.log(square(n));