import Answer from "./Answer";

const Question = ({ question }) => {
  return (
    <div className="centered">
      <br></br>
      <h3>{question.title}</h3>
      <li>a) {question.answers.a}</li>
      <li>b) {question.answers.b}</li>
      <li>c) {question.answers.c}</li>
      {/* <Answer answers={question.answers}/> */}
    </div>
  );
};
export default Question;
