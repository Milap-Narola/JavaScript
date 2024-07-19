let i = 0;
let correctCount = 0;
let jsonData = [];
let timer;
let timeLeft = 30; // seconds for each question

document.addEventListener('DOMContentLoaded', async () => {
    try {
        let req = await fetch('http://localhost:3000/Questions');
        jsonData = await req.json();
        startQuiz();
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
});

const startQuiz = () => {
    generateQuestion();
    startTimer();
};

const generateQuestion = () => {
    const currentQuestion = jsonData[i];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("optt1").innerText = currentQuestion.A;
    document.getElementById("optt2").innerText = currentQuestion.B;
    document.getElementById("optt3").innerText = currentQuestion.C;
    document.getElementById("optt4").innerText = currentQuestion.D;
};

const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.nextElementSibling.innerText;
        const correctOptionText = currentQuestion[`option${jsonData[i].answer}`];
        if (selectedAnswer === correctOptionText) {
            correctCount++;
        }
    }
};

const nextQuestion = () => {
    checkAnswer();
    resetTimer();
    i++;
    if (i < jsonData.length) {
        generateQuestion();
        startTimer();
    } else {
        showScore();
    }
};

const showScore = () => {
    document.body.innerHTML = `<div style='color:#ffffff;font-size:18pt;text-align:center;background-color:#348322;'>***** Your score is: ${correctCount} *****</div>`;
};

const startTimer = () => {
    timeLeft = 30; // Reset time for each question
    document.getElementById("timer").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
};

const resetTimer = () => {
    clearInterval(timer);
    document.getElementById("timer").innerText = '';
};
