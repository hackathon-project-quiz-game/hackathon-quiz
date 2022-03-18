
import React from 'react'



function Questions(props) {
    const buttonClass = null

    return (
        <div className='questions-container w-auto m-5 p-5 text-2xl bg-gray-700 rounded-lg mb-2 flex flex-col items-center justify-center h-4/6 max-h-full'>
            <div className='question-section text-gray-100'>
                <div className='question-text text-3xl font-semibold capitalize'>{props.question.title}</div>
            </div>
            <div className='answer-section text-gray-300 grid grid-cols-2 mt-10 gap-x-28 gap-y-4 '>
                {props.question.answers.map((answerOption, index) => (
                    <div className=''>
                        <button className={`font-medium border-2 border-slate-300 hover:border-slate-500 rounded-sm py-1 px-2 w-44 active:bg-gray-600 ${props.correctAnswer}`}
                            key={index}
                            onClick={() => props.handleCorrectAnswerClick(index === props.question.correctAnswer ? true : false)}
                        >
                            {answerOption}
                        </button>
                    </div>
                ))}
                <div>
                    {}
                </div>
            </div>
        </div>
    )
}

export default Questions

