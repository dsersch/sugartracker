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
      userid: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  onSignIn = (userId) => {
    this.setState({userid: userId, isSignedIn: true, route: 'home'})
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
        return <Register onSignIn={this.onSignIn} />;
      case 'addTest': 
        return <AddTest id={this.state.userid} onRouteChange={this.onRouteChange} />
      case 'signin':
        return <SignIn onSignIn={this.onSignIn}/>
      default:
        return <div>whoa, messed that up...</div>
    }
  }

render() {
  return (
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        {this.currentRoute()}
      </div>
    );
  }
}

export default App;