// Quiz Data
const quizData = {
  math: [
    { question: "What is 5 + 3?", options: ["5", "8", "10"], answer: "8" },
    { question: "What is 9 - 4?", options: ["5", "7", "6"], answer: "5" }
  ],
  science: [
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], answer: "Mars" },
    { question: "What is H2O commonly known as?", options: ["Salt", "Water", "Oxygen"], answer: "Water" }
  ],
  history: [
    { question: "Who discovered America?", options: ["Columbus", "Newton", "Einstein"], answer: "Columbus" },
    { question: "When did World War II end?", options: ["1942", "1945", "1950"], answer: "1945" }
  ]
};

// Elements
const subjectDropdown = document.getElementById("subject");
const startQuizButton = document.getElementById("startQuiz");
const quizSection = document.getElementById("quizSection");
const quizTitle = document.getElementById("quizTitle");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextQuestionButton = document.getElementById("nextQuestion");
const resultDiv = document.getElementById("result");

// Variables to track quiz state
let currentQuestionIndex = 0;
let selectedSubject = "";
let score = 0;

// Fullscreen Function
function enableFullscreen() {
  const element = document.documentElement; // Get the entire document element
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen(); // For Firefox
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen(); // For Chrome, Safari, and Opera
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen(); // For Internet Explorer/Edge
  }
}

// Start Quiz
startQuizButton.addEventListener("click", () => {
  selectedSubject = subjectDropdown.value;
  if (!selectedSubject) {
    alert("Please select a subject!");
    return;
  }

  enableFullscreen(); // Enter fullscreen mode before starting the quiz
  setTimeout(() => {
    loadQuiz(selectedSubject);
  }, 500); // Small delay to ensure fullscreen is enabled
});

// Load Quiz
function loadQuiz(subject) {
  currentQuestionIndex = 0;
  score = 0;

  quizTitle.textContent = `Quiz: ${subject.charAt(0).toUpperCase() + subject.slice(1)}`;
  quizSection.classList.remove("hidden");
  questionContainer.classList.remove("hidden");
  nextQuestionButton.classList.remove("hidden");

  loadQuestion();
}

// Load a Single Question
function loadQuestion() {
  const questions = quizData[selectedSubject];
  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  optionsDiv.innerHTML = ""; // Clear previous options

  currentQuestion.options.forEach((option) => {
    const optionHTML = `
      <label>
        <input type="radio" name="option" value="${option}"> ${option}
      </label><br>`;
    optionsDiv.innerHTML += optionHTML;
  });
}

// Next Question Handler
nextQuestionButton.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  const questions = quizData[selectedSubject];
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption.value === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult(questions.length);
  }
});

// Show Result
function showResult(totalQuestions) {
  questionContainer.classList.add("hidden");
  nextQuestionButton.classList.add("hidden");
  resultDiv.textContent = `You scored ${score} out of ${totalQuestions}`;
  resultDiv.classList.remove("hidden");
}
