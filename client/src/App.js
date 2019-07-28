import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component = {Homepage} />
      </div>
    </Router>
  );
}

export default App;
