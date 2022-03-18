import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { Component } from "react";

class Answer extends Component {


// const allAnswers = this.props.answers;
  
  render() {
    console.log(this.props.answers)
    const ques = this.props.answers.map((answer, i) => {
      return (
        <>
       {/* <h1> Title {answer}</h1> */}
          <form>
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
        
<input type="submit" value="submit" />
</form>
    </>
      );
    });

    return (
      <>
        <div class="backgroundpicI">
         {/* {ques} */}
         Yea
        </div>
      </>
    );
  }
}


export default Answer