import './styles/App.scss';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import FrontPage from './pages/FrontPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/' element={<FrontPage />}/>
          <Route path='/dashboard/' element={<Dashboard />}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
