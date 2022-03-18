import { Component } from "react";
import questions from "../data";
import Question from "./Question";

class Questions extends Component {
  render() {
    const ques = questions.map((question, i) => {
      return (
        <div class="questions-card">
           {/* <div class="name-container">
            <h2>{question.title} Qtitle</h2>

          </div>
          <div>
            <br></br>
            Answers:
            <br></br>
            <br></br>
            <li>a) {question.answers.a}</li>
            <li>b) {question.answers.b}</li>
            <li>c) {question.answers.c}</li>
          </div>  */}
          <Question key={i} question={question}/>
        </div>
      );
    });

    return (
      <>
        <div class="backgroundpicI">
          <h2>Quiz</h2>
         {ques}
        </div>
      </>
    );
  }
}

export default Questions;
