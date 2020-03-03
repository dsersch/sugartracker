import React, { Component } from 'react';

class SignIn  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    render() {
        return (
            <div className="registerForm">
                <h2>Sign In</h2>
                <div className="inputSection">
                    <p className="formLabel">Email</p>
                    <input className="addTestInput" type="text" placeholder="email"/>
                </div>
                <div className="inputSection">
                    <p className="formLabel">Password</p>
                    <input className="addTestInput" type="password" placeholder="password"/>
                </div>
                <button className="addButton" onClick={() => this.props.onRouteChange('home')}>Log In</button>
            </div>
        )
    }
}
    

export default SignIn;