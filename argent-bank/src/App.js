import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header';


function App() {
  return (
      <Router>
        <div>
          <Header/>
          <div>                   
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="*" /> 
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
