
   
import { Component } from "react";
import questions from "./data";



class Questions extends Component {


  render() {

    const ques = questions.map((question, i) => {


      return (
        <div class='questions-card'>
          <div class="name-container">
            <h2>{question.title}</h2>
          </div>
          <div>
          <br></br>
                Options:
                <br></br>
                <br></br>
               <li>a) {question.answers.a}</li>
               <li>b) {question.answers.b}</li>
              <li>c) {question.answers.c}</li> 
          </div>
        </div>
      );
    });

    return (
      <>
        <div class="backgroundpicI">
          <div class='questions-cardcontainer'>
            {ques}
          </div>
        </div>

      </>
    );
  }
}

export default Questions;