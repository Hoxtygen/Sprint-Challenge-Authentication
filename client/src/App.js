import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path = '/' component = {Homepage} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/register' component = {Register} />
      </div>
    </Router>
  );
}

export default App;
