import Overview from './components/Overview';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Employment from './components/Employment';

function App() {
  return (
    <div className="App">
      <GeneralInfo />
      <Education />
      <Employment />
     <Overview />
    </div>
  );
}

export default App;
