/*Q.6 you have given a string

input
red and white
output
4 */

let str = "red and white";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
}
console.log(count);