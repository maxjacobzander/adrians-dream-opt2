import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutComponent from './components/AboutComponent';
import Gallery from './components/Gallery';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={AboutComponent}/>
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/events' exact component={Events} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
