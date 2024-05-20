let play1 = document.getElementById('player1');
let play2 = document.getElementById('player2');


pushbtn.addEventListener('click', () => {
    let Number1 = Math.round(Math.random() * 5) + 1;
    play1.innerHTML = Number1;
   
    let Number2 = Math.round(Math.random() * 5) + 1;
    play2.innerHTML = Number2;
    Number3(Number1, Number2);
});

const Number3=(Number1,Number2)=>{
    
    if (Number1 === Number2) {
        document.getElementById("result").innerHTML = "!Draw!"
    }
    else if (Number1 < Number2) {
        document.getElementById("result").innerHTML = "Player 2 Wins";
    }
    else
    document.getElementById("result").innerHTML = "Player 1 Wins";
}
document.getElementById('pushbtn').addEventListener('click',Number1);
document.getElementById('pushbtn').addEventListener('click',Number2);