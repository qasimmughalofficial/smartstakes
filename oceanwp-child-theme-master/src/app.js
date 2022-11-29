import React from 'react';
import Match from './pages/Match'
import MatchDetails from './pages/MatchDetails'
import './index.css';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BreadCrumb from './pages/BreadCrumb';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <BreadCrumb/>
        <div className='custom-container'>
          <Routes>
            {['/app', '/app/:sportURL'].map(path => (
              <Route key={path} path={path} element={<Match />} />
            ))}
            {/* <Route path="/app/matchDetail/:matchDetailURL" element={<MatchDetails />} /> */}
            <Route path="/app/:sportURL/:matchID" element={<MatchDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
