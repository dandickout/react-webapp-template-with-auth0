import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/landingPage';
import About from './views/about';
import './global.css';
import TopNavBar from './components/top-nav-bar'; // Import the TopNavBar component
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './views/dashboard';

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const [authStatus, setAuthStatus] = useState(isAuthenticated);

  useEffect(() => {
    setAuthStatus(isAuthenticated);
  }, [isAuthenticated]);

  return (
      <Router> 
        <div className="app-container">
          <TopNavBar isAuthenticated={authStatus} user={user} setAuthStatus={setAuthStatus} />
          <div className="main-content">
            <Routes>
              <Route path="/" exact element={<LandingPage />} />
              {authStatus && (
                <>
                  <Route path="/dashboard" exact element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;
