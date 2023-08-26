const Questions = [{
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "<javascript>", isCorrect: false },
    { text: "<scripting>", isCorrect: false },
    { text: "<script>", isCorrect: true },
    { text: "<js>", isCorrect: false }
    ]
 
},
{
    q: "Where is the correct place to insert a JavaScript?",
    a: [{ text: "<head> section", isCorrect: false, },
    { text: "<script> section", isCorrect: false },
    { text: "Both <head> and <body> section", isCorrect: false },
    { text: "<body> section", isCorrect: true }
    ]
 
},
{
    q: "How do you write Hello World in an alert box?",
    a: [{ text: "msg();", isCorrect: false },
    { text: "alertBox();", isCorrect: false },
    { text: "alert();",isCorrect: true },
    { text: "msgBox();", isCorrect: false }
    ]
 
},
{
    q: "How do you create a function in JavaScript?",
    a: [{ text: "functionmyFunction();", isCorrect: false },
    { text: "function=myFunction();", isCorrect: false },
    { text: "function:myFunction();", isCorrect: true },
    { text: "function myFunction();", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}