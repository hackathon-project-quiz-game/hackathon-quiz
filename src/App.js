import "./App.css";
import ScoreBoard from "./components/ScoreBoard";
import Questions from "./components/Questions";
import FinalScore from "./components/FinalScore";
import questions from "../src/data";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [currentAnswer, setCurrentAnswer] = useState("");

  const [isCorrect, setIsCorrect] = useState(null)

  const handleCorrectAnswerClick = (isCorrect) => {
    console.log(isCorrect)
    let nextQuestion = currentQuestion + 1
    if (isCorrect) {
      setTimeout(() => {
        setScore(score + 1);
      }, 2000);
    }
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, 2500);
    } else {
      setShowScore(true)
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let nextQuestion = currentQuestion + 1;
  
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } 

    if (questions[currentQuestion].correctAnswer == currentAnswer) {
      setScore(score + 1);
      alert("Correct!")
    }
    if (questions[currentQuestion].correctAnswer != currentAnswer) {
      alert("WRONG!")
    }
  };

  const onChangeHandler = (e) => {
    let currentAnswer = e.target.value;
    setCurrentAnswer(currentAnswer);
  };

  return (
    <div className='font-rajhdani flex flex-col justify-center items-center bg-slate-400 h-screen py-5'>
      {showScore ?
        <div className='container'>
          <FinalScore />
        </div>
        :
        <div className='container'>
          <ScoreBoard
            score={score}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />

          <Questions
            question={questions[currentQuestion]}
            handleCorrectAnswerClick={handleCorrectAnswerClick}
            submitHandler={submitHandler}
            onChangeHandler={onChangeHandler}
          />
        </div>
      )}
    </div>
  );
}

export default App;
