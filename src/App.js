import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import AddTest from './components/addtest/AddTest';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userid: 1,
      testResults: [],
      route: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/home', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({userid: this.state.userid})
    }).then((response) => response.json())
    .then((res) => {
      this.setState({testResults: res});
    }).catch((error) => {
      console.error('Error:', error);
    });
  }

  generateStats = () => {
    if (this.state.testResults.length === 0) {
      return <div></div>
    } else {
      const last = this.state.testResults[0].sugar
      let fastingTotal = 0
      let fastingTests = 0
      let afterFoodTotal = 0
      let afterFoodTests = 0
      this.state.testResults.forEach((test) => {
        if (test.fasting) {
          fastingTotal = fastingTotal + test.sugar;
          fastingTests++
        } else {
          afterFoodTotal = afterFoodTotal + test.sugar;
          afterFoodTests++
        } 
      })
      return <Home last={last} fastingAVG={fastingTotal/fastingTests} afterFoodAVG={afterFoodTotal/afterFoodTests}/>
    }
  }

render() {
  
  return (
      <div className="App">
        <Nav />
        {this.generateStats()}
        <AddTest id={this.state.userid} />
      </div>
    );
  }
}

export default App;