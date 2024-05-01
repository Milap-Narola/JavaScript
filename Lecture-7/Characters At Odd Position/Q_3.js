/*Q.3 sample input
white
output
h
t
w
node indexing starts from 0 */

let str = "White";

for (let i = 0; i <= str.length; i++) {
    if (i % 2 === 1) {
        
        console.log(str[i]);
    }
}
