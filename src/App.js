import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Questions from './components/Questions';
import FinalScore from './components/FinalScore';
import questions from '../src/data';
import { useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [correctState, setCorrectState] = useState("")

  const handleCorrectAnswerClick = (isCorrect) => {
    console.log(isCorrect)
    let nextQuestion = currentQuestion + 1
    if (isCorrect) {
      setCorrectState("bg-green-400 text-gray-400")
      setTimeout(() => {
        setScore(score + 1);
        setCorrectState("")
      }, 1000);
    } else {
      setCorrectState("bg-red-400 text-gray-400")
      setTimeout(() => {
        setCorrectState("")
      }, 1000);
    }
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, 1500);
    } else {
      setShowScore(true)
    }
  }

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
            correctAnswer={correctState}
          />
        </div>
      }
    </div>
  );
}

export default App;
