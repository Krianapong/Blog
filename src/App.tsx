import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import './index.css'; // ใช้ Tailwind CSS
import About from './pages/About';
import Resume from './pages/Resume';
import Donate from './pages/Donate';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <div className="flex">
          <Navigation />
          <MainContent>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </MainContent>
        </div>
      </div>
    </Router>
  );
};

export default App;
