import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Designer from './Designer'; 
import Browse from './Browse'; 
import Administration from './Administration';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get the current location inside a Router context

  return (
    <div className="grid-container">
      <Sidebar activePage={location.pathname} />
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/designer" element={<Designer />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/administration" element={<Administration />} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
