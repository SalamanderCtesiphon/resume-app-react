import Overview from './components/Overview';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Employment from './components/Employment';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='pageView'>
        <div className='inputForm'>
          <div className='general'>
            <GeneralInfo /> 
          </div>
          <div className='education'>
          <Education />
          </div>
          <div className='employment'>
            <Employment />
          </div>        
        </div>
        <div className='display'>
          <Overview />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>     
    </div>
  );
}

export default App;
