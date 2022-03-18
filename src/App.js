import './App.css';
import ScoreBoard from './components/ScoreBoard';
import Questions from './components/Questions';
import Question from './components/Question';
function App() {
  return (
    <div className='font-rajhdani'>
      <ScoreBoard />
    <Questions />
    {/* <Question /> */}
    </div>
  );
}

export default App;
