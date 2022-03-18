import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Questions from './components/Questions';
import questions from '../src/data';
import { useState } from 'react';


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick=()=>{
    console.log(currentQuestion)
    setCurrentQuestion(currentQuestion + 1)
  }


  return (
    <div className='font-rajhdani'>
      <ScoreBoard />
      <div className='question-count'>
        <span>Question {currentQuestion + 1}</span>/{questions.length}
      </div>
    <Questions
    question = {questions[currentQuestion]}
    handleClick = {handleClick}
    />
    </div>
  );
}

export default App;
