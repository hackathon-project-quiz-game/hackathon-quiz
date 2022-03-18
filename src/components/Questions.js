import React from "react";

function Questions(props) {
  return (
    <div>
      <div className="question-section">
        <div className="question-text">{props.question.title}</div>
      </div>
      <div className="answer-section">
        <form onSubmit={props.submitHandler}>
          {props.question.answers.map((answerOption, index) => (
            <>
              <input
                type="radio"
                name="radio-option"
                value={index}
                onChange={props.onChangeHandler}
              ></input>
              {answerOption}
              <br></br>
            </>
          ))}

          <br></br>
          <input type="submit" value="next" />
        </form>
      </div>
    </div>
  );
}

export default Questions;
