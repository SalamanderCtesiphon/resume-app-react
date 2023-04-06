import Overview from './components/Overview';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Employment from './components/Employment';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Doe')
  const [email, setEmail] = useState('someEmail@email.com')
  const [phone, setPhone] = useState('555-555-5555')

  const onSubmitGeneralInfo = (e) => {
    e.preventDefault()
    console.log({firstName, lastName, email, phone})

  }


  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='pageView'>
        <div className='inputForm'>
          <div className='general'>
            <GeneralInfo
            onSubmitGeneralInfo={onSubmitGeneralInfo}
            firstName={firstName}
            lastName={lastName}
            email={email}      
            phone={phone}
            /> 
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
