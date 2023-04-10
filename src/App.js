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
  const [schoolName, setSchoolName] = useState('Some University')
  const [titleOfStudy, setTitleOfStudy] = useState('some dumb degree')
  const [graduationYear, setGraduationYear] = useState('2020')


  const onSubmitGeneralInfo = (e) => {
    e.preventDefault()
    setFirstName('')
  }

  const onSubmitEducation = (e) => {
    e.preventDefault()
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
          <Education 
            onSubmitEducation={onSubmitEducation}
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            graduationYear={graduationYear}
          />
          </div>
          <div className='employment'>
            <Employment />
          </div>        
        </div>
        <div className='display'>
          <div>
            <div>{firstName}{lastName}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </div>
          <div>
            <div>{schoolName}</div>
            <div>{titleOfStudy}</div>
            <div>{graduationYear}</div>
          </div>
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
