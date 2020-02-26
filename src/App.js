import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import AddTest from './components/addtest/AddTest';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ''
    }
  }

render() {
  return (
      <div className="App">
        <Nav />
        <Home />
        <AddTest />
      </div>
    );
  }
}

export default App;