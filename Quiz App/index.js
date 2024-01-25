const quizQues = [
  {
    question: "What is the capital of France?",
    a: "Madrid",
    b: "Berlin",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b",
  },
  {
    question: "What is the largest mammal on Earth?",
    a: "Elephant",
    b: "Blue whale",
    c: "Girrafe",
    d: "Gorilla",
    correct: "b",
  },
  {
    question: "In which year did Christopher Columbus reach the Americas?",
    a: "1492",
    b: "1588",
    c: "1776",
    d: "1607",
    correct: "a",
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Gd",
    b: "Au",
    c: "Ag",
    d: "Fe",
    correct: "b",
  },
];
const quiz = document.querySelector("#quiz");
const answerEl = document.querySelectorAll(".answer");
const quesEl = document.querySelector("#question");
const solA = document.querySelector("#a_text");
const solB = document.querySelector("#b_text");
const solC = document.querySelector("#c_text");
const solD = document.querySelector("#d_text");
const button = document.querySelector("#submit");
const radioA = document.querySelector("#a");
const radioB = document.querySelector("#c");
const radioC = document.querySelector("#b");
const radioD = document.querySelector("#d");
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizQues[currentQuiz];

  quesEl.textContent = currentQuizData.question;
  solA.textContent = currentQuizData.a;
  solB.textContent = currentQuizData.b;
  solC.textContent = currentQuizData.c;
  solD.textContent = currentQuizData.d;
}
let score = 0;
function gotSelected() {
  let answer = undefined;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

button.addEventListener("click", () => {
  const answer = gotSelected();
  console.log(answer === quizQues[currentQuiz].correct);
  if (answer) {
    if (answer === quizQues[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizQues.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly  ${score}/${quizQues.length} questions. </h2>
        <button onclick=location.reload()>Reload</button>`;
    }
  }
});
