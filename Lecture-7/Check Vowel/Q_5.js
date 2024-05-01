/*Q.5 if the string contains vowel print true else false

input
red
output
True

hint vowel=e */

let str = "red";

for (let i = 0; i <= str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
        console.log(str[i]);

    }
}