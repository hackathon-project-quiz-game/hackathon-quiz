import React from 'react'
import questions from '../data'

function Questions() {
    return (
        <div>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question 1</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[1].title}</div>
            </div>
            <div className='answer-section'>
                {questions[1].answers.map((answerOption, index) => (
                    <div>
                        <button>{answerOption.a}</button>
                        <br />
                        <button>{answerOption.b}</button>
                        <br />
                        <button>{answerOption.c}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Questions