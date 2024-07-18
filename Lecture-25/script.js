let questionNo=0;
let score=0;

let question_title=document.getElementById("question_title");
let option_list=document.getElementById("option-list");
let score_area=document.getElementById("score-area");
let btn_submit=document.getElementById("submit");
let start=document.getElementById("start");
let play_again=document.getElementById("play-again");


hideItem('question_title')
hideItem('option_list')
hideItem('btn_submit')
hideItem('play_again')
hideItem('score_area')


start.addEventListener('click', function(){
showItem('question_title')
showItem('option_list')
showItem('btn_submit')
loadQuestion()
})
function loadQuestion(){
    
}


function hideItem(element){
    element.style.display="none";
}

function showItem(element){
    element.style.display="block";
}