import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    question: "What is the time complexity of binary search?",
    options: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "What is the output of 2 + '2' in JavaScript?",
    options: ["4", "'22'", "NaN", "Error"],
    answer: "'22'",
  },
  {
    question: "Which HTML element is used to define a title for the document?",
    options: ["<meta>", "<title>", "<head>", "<body>"],
    answer: "<title>",
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answer: "HTML",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Control Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which keyword is used to define a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    question: "Which method is used to remove the last element from an array in JavaScript?",
    options: [".pop()", ".push()", ".shift()", ".splice()"],
    answer: ".pop()",
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "HyperText Transmission Protocol",
      "HighText Transmission Protocol",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["80", "8080", "443", "21"],
    answer: "80",
  },
  {
    question: "Which symbol is used to comment a single line in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//",
  },
  {
    question: "Which of the following is NOT a database?",
    options: ["MySQL", "MongoDB", "Redis", "PHP"],
    answer: "PHP",
  },
  {
    question: "What is the full form of API?",
    options: [
      "Application Programming Interface",
      "Application Processing Interface",
      "Automated Programming Interface",
      "Application Product Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which of the following is a frontend framework?",
    options: ["React", "Node.js", "Django", "Flask"],
    answer: "React",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Language",
    ],
    answer: "Structured Query Language",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const score = answers.filter(
    (answer, index) => answer === quizData[index].answer
  ).length;

  return (
    <div>
      {showResult ? (
        <Result score={score} total={quizData.length} />
      ) : (
        <div>
          <Question
            data={quizData[currentQuestion]}
            onAnswer={handleAnswer}
            userAnswer={answers[currentQuestion]}
          />
          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion < quizData.length - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
