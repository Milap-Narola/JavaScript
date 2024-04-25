/*Q.1 you have to take  two numbers stored in the variable with the following names,
num, K
You have to print all the numbers in the range [1, num], such that for each number, the operation I % K == 0, where I refers to the numbers present in that range
Print each number on a new line
Sample Input 
7 2
Sample Output
2
4
6 */
const DividedbyK = () => {

    let number = parseInt(document.getElementById("numberInput").value);

    let k = parseInt(document.getElementById("kInput").value);

    for (let i = 1; i <= number; i++) {
        if (i % k === 0) {
            console.log(i);
        }
    }
    document.getElementById("result").innerText = "This value " + number + " Divided By  " + k;

}