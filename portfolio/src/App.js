import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkHistory from './components/WorkHistory';
import Hobbies from './components/Hobbies';
import ContactMe from './components/ContactMe';
import ContactForm from './components/ContactForm';
import Github from './components/Github';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Education />
      <WorkHistory />
      <Github />
      <Hobbies />
      <ContactMe />
      <ContactForm />
    </div>
  );
}

export default App;
