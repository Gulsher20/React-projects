import './App.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home'
function App() {
  return (

    <div className='app'>
      <Router>
         <Navbar/> 
        <Routes>
          <Route path="/Home" element={<Home />} />  {/* Corrected path */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
       <Footer/> 
    </div>
  );
}

export default App;
