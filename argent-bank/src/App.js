import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <div className='main_container'>            
            <Routes>
              <Route path="/" element={<Home />} />  
            </Routes>
          </div>
          
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
