const quizData =[
    {
        question:"Who is the president of America 2025 onwards",
        a:"Joe Biden",
        b:"Kamala Harris",
        c:"Donald Trump",
        d:"Abraham clinton",
        correct:"c",
    },
    {
        question:"Who is the chess champion of the world in 2024",
        a:"Pragyanandha",
        b:"Gukesh",
        c:"Malavika",
        d:"Arjun",
        correct:"b",
    },
    {
        question:"Who is the CEO of Google",
        a:"Sundar Pichai",
        b:"Jeff Bezos",
        c:"Mark Zuckerberg",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the CEO of Amazon",
        a:"Jeff Bezos",
        b:"Sundar Pichai",
        c:"Mark Zuckerberg",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the CEO of Facebook",
        a:"Mark Zuckerberg",
        b:"Sundar Pichai",
        c:"Jeff Bezos",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the CEO of Tesla",
        a:"Elon Musk",
        b:"Jeff Bezos",
        c:"Mark Zuckerberg",
        d:"Sundar Pichai",
        correct:"a",
    },
    {
        question:"Who is the CEO of Microsoft",
        a:"Satya Nadella",
        b:"Sundar Pichai",
        c:"Jeff Bezos",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the CEO of Apple",
        a:"Tim Cook",
        b:"Jeff Bezos",
        c:"Mark Zuckerberg",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the CEO of Twitter",
        a:"Parag Agrawal",
        b:"Sundar Pichai",
        c:"Jeff Bezos",
        d:"Elon Musk",
        correct:"a",
    },
    {
        question:"Who is the head of ISRO",
        a:"S. Somanath",
        b:"S. Sreedhar",
        c:"S. Srinivas",
        d:"Narayan",
        correct:"d",
    },

];
const quiz = document.getElementById("quiz");
const answer = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
// var ques = quizData[0]
// alert(ques.a)
let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function deselectAnswers() {
    answer.forEach((ans)=>ans.checked = false);
}
function getSelected() {
    let ans;
    answer.forEach((ans1)=>{
        if(ans1.checked) {
            ans = ans1.id;
        }
    })
    // alert(ans); 
    return ans;
}
submitBtn.addEventListener("click",()=>{
    const ans = getSelected();
    if (ans) {
        if (ans === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz<quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2>You Answered ${score}/${quizData.length} Questions Correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }

})