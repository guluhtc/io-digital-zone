import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DelhiLocation from './components/DelhiLocation';
import PuneLocation from './components/PuneLocation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<DelhiLocation />} />
          <Route path="/pune" element={<PuneLocation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;