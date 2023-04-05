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
      <Header />
      <GeneralInfo />
      <Education />
      <Employment />
     <Overview />
     <Footer />
    </div>
  );
}

export default App;
