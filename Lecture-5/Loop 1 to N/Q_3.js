/*Q.3 you have to take the input  number stored in a variable with the name num
You have to print all the numbers from 1 to num, including num as well. in the console
Print each number on a new line,
Sample Input: 5
Sample Output: 1
1
2
3
4
5 */
const printNnumber = () => {
    let number = parseInt(document.getElementById("numInput").value);

    for (let i = 1; i < number; i++) {
        console.log(i);
    }
}