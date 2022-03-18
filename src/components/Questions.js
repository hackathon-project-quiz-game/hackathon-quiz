
import React from 'react'




function Questions(props) {
    return (
        <div>
            <div className='question-section'>
                <div className='question-text'>{props.question.title}</div>
            </div>
            <div className='answer-section'>
                {props.question.answers.map((answerOption, index) => (
                    <div>
                        <button key={index} onClick={()=>props.handleCorrectAnswerClick(index === props.question.correctAnswer ? true : false)}>{answerOption}</button>
                    </div>
                ))}
                {/* <button onClick={props.handleClick}>next</button> */}
            </div>
        </div>
    )
}

export default Questions

