let Data = [
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a scripting language used to make the website interactive",
        a: "JavaScript is a scripting language used to make the website interactive",
        b: "JavaScript is an assembly language used to make the website interactive",
        c: "JavaScript is a compiled language used to make the website interactive",
        d: "None of the mentioned",
        right: true,
        wrong: false,
    },
    {
        question: "Which of the following is correct about JavaScript?",
        answer: "JavaScript is an Object-Based language",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: " JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        right: true,
        wrong: false,
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answer: "program",
        a: 'interface',
        b: "throws",
        c: "program",
        d: "short",
        right: true,
        wrong: false,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: `var colors = ["red", "green", "blue"]`,
        a: `var colors = (1:"red", 2:"green", 3:"blue")`,
        b: `var colors = "red", "green", "blue"`,
        c: `var colors = ["red", "green", "blue"]`,
        d: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        right: true,
        wrong: false,
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        a: "onchange",
        b: "onclick",
        c: "onmouseclick",
        d: "onmouseover",
        right: true,
        wrong: false,
    },
    {
        question: "How do you declare a JavaScript variable?",
        answer: "var carName",
        a: "variable carNam",
        b: "var carName",
        c: "v carName",
        d: "string carName;",
        right: true,
        wrong: false,
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answer: 'It is an ordered list of values',
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects",
        c: "It is an ordered list of string",
        d: "It is an ordered list of functions",
        right: true,
        wrong: false,
    },
    {
        question: "Where is Client-side JavaScript code is embedded within HTML documents?",
        answer: "A URL that uses the special javascript:protocol",
        a: "A URL that uses the special javascript:code",
        b: "A URL that uses the special javascript:protocol",
        c: "A URL that uses the special javascript:encoding",
        d: "A URL that uses the special javascript:stack",
        right: true,
        wrong: false,
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answer: "Window",
        a: "Position",
        b: "Window",
        c: "Standard",
        d: "Location",
        right: true,
        wrong: false,
    },
    {
        question: "Which of the following can be used to call a JavaScript Code Snippet?",
        answer: 18,
        a: "Function/Method",
        b: "Preprocessor",
        c: "Triggering Event",
        d: "RMI",
        right: true,
        wrong: false,
    }
]

Data.map((ele) => {
    let que = document.createElement("p");
    que.innerHTML = ele.question;

    let a = document.createElement("p");
    a.innerHTML = ele.a;
    a.setAttribute("class", "aTag");

    let b = document.createElement("p");
    b.innerHTML = ele.b;

    let c = document.createElement("p");
    c.innerHTML = ele.c;

    let d = document.createElement("p");
    d.innerHTML = ele.d;

    let ans = ele.answer;
    let btn1 = document.createElement("button");
    btn1.innerHTML = ele.a;
    btn1.style.display = "block"
    btn1.style.marginBottom = "10px"
    btn1.style.border = "none"
    btn1.style.backgroundColor = "white"
    btn1.style.cursor = "pointer"
    btn1.addEventListener("click", () => {
        if (ele.a === ans) {
            btn1.style.backgroundColor = "green";
        } else {
            btn1.style.backgroundColor = "red";
        }
    }); 

    let btn2 = document.createElement("button");
    btn2.innerHTML = ele.b;
    btn2.style.display = "block"
    btn2.style.marginBottom = "10px"
    btn2.style.border = "none"
    btn2.style.backgroundColor = "white"
    btn2.style.cursor = "pointer"
    btn2.addEventListener("click", () => {
        if (ele.b === ans) {
            btn2.style.backgroundColor = "green";

        } else {
            btn2.style.backgroundColor = "red";
        }
    });

    let btn3 = document.createElement("button");
    btn3.innerHTML = ele.c;
    btn3.style.display = "block"
    btn3.style.marginBottom = "10px"
    btn3.style.border = "none"
    btn3.style.backgroundColor = "white"
    btn3.style.cursor = "pointer"
    btn3.addEventListener("click", () => {
        if (ele.c === ans) {
            btn3.style.backgroundColor = "green";
        } else {
            btn3.style.backgroundColor = "red";
        }
    });

    let btn4 = document.createElement("button");
    btn4.innerHTML = ele.d;
    btn4.style.display = "block"
    btn4.style.marginBottom = "10px"
    btn4.style.border = "none"
    btn4.style.backgroundColor = "white"
    btn4.style.cursor = "pointer"
    btn4.addEventListener("click", () => {
        if (ele.d === ans) {
            btn4.style.backgroundColor = "green";
        } else {
            btn4.style.backgroundColor = "red";
        }
    });

    let divtag = document.createElement("div");
    divtag.append(btn1, btn2, btn3, btn4);
    let br = document.createElement("br");

    let div = document.createElement("div");
    div.append(que,divtag, br);
    div.setAttribute("class", "div");

    document.getElementById("Result").append(div);
});