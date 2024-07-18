const questionGet = async () => {


    let req = await fetch('http://localhost:3000/Questions')
    let res = await req.json()
    uiMaker(res)
 
    // console.log(res);

}

const uiMaker = (res) => {

    document.getElementById('questionsList').innerHTML = ''

    res.map((ele) => {
        let questionDiv = document.createElement('div')
        questionDiv.innerHTML=ele.questionDiv
        questionDiv.ele = document.createElement('p')
         
        questionDiv.ele.innerHTML = `Question: ${ele.question}`
        let id = ele._id
        questionDiv.ele.id = `answer-${id}`
        questionDiv.addEventListener('click', ()=> {
            answerQuestion(id)
        })
        questionDiv.append(questionDiv.ele)
        document.getElementById('questionsList').append(questionDiv)


    })
}


questionGet()

const answerQuestion = async (id) => {

    let res = await fetch(`http://localhost:3000/Questions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answer: answer })
    })

    if (res.ok) {
        alert('Answer submitted successfully')
        questionGet()
    } else {
        alert('Error submitting answer')
    }
}

let startButton = document.getElementById('startButton')
  
startButton.addEventListener('click', function () {
     questionGet()
})   
