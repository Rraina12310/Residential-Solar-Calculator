import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/landingPage';
import About from './components/about';
import InputPage from './components/inputPage'; // Import your InputPage component
import OutputPage from './components/outputPage';
import HeaderLogo from './assets/header_logo.png';

function App() {
  return (
    <div className="page-container">
      <nav className="nav">
        <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer" className="logo-container">
          <img src={HeaderLogo} alt="HeaderLogo" className="app-logo" />
        </a>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/About" className="nav-item">About us</Link>
          <Link to="/inputPage" className="nav-item">Input Page</Link>
          <Link to="/outputPage" className="nav-item">Output Page</Link>
        </div>
      </nav>

      {/* Dynamic content section */}
      <div className="inner-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/inputPage" element={<InputPage />} />
          <Route path="/outputPage" element={<OutputPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;