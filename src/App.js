import Overview from './components/Overview';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <Education />
     <Overview />
    </div>
  );
}

export default App;
