import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, About } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
