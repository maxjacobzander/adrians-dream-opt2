import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Events from './components/Events';

function App() {
  require('dotenv').config()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/events' exact component={Events} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
