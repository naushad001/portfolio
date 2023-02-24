import React from 'react';
import Nav from './Component/Nav.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header.js';
import About from './Component/About.js';
import Project from './Component/project.js';
import Resume from './Component/Resume.js';
import Contact from './Component/Contact.js';
import Footer from './Component/Footer.js';
import './App.css';

function App() {
  return (
    <div >
      <Nav />
      <Header />
      <About />
      <Resume />
      <Project/>
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
