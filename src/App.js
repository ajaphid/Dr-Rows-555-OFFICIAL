import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import BreatheScreen from './screens/BreatheScreen';
import LearnScreen from './screens/LearnScreen';
import './assets/styles/App.css';

const App = () => {
  return (
    <Router basename="/Dr-Rows-555-OFFICIAL">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/breathe" element={<BreatheScreen />} />
          <Route path="/learn" element={<LearnScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
