import React, { Component } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import AddTest from './components/addtest/AddTest';
import Register from './components/register/Register';
import SignIn from './components/signIn/SignIn';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userid: 1,
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange =(route) => {
    if (route === 'signout') {
      this.setState({route: 'signin', isSignedIn: false, userid: '', testResults: []})
    } else {
      this.setState({ route })
    }
  }

  currentRoute = () => {
    switch (this.state.route) {
      case 'home':
        return <Home userid={this.state.userid}/>;
      case 'register':
        return <Register />;
      case 'addTest': 
        return <AddTest id={this.state.userid} />
      case 'signin':
        return <SignIn onRouteChange={this.onRouteChange}/>
      default:
        return <div>whoa, messed that up...</div>
    }
  }

render() {
  
  return (
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} />
        {this.currentRoute()}
        {/* <Register />
        {this.generateStats()}
        <AddTest id={this.state.userid} /> */}
      </div>
    );
  }
}

export default App;