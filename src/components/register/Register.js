import React, { Component } from 'react';
import './Register.css';

class Register  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmit = () => {
        if (this.state.signInEmail === '' || this.state.signInPassword === '') {
            alert('Please provide an email and a password...')
        } else {
            fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((res) => {
              res.message === 'success' ? this.props.onSignIn(res.result) : alert(res.message)
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } 
    }

    render() {
        return (
            <div className="registerForm shadow">
                <h2>Register</h2>
                <div className="inputSection">
                    <p className="formLabel">Email</p>
                    <input className="addTestInput shadow" type="text" placeholder="email"
                    onChange={this.onEmailChange} />
                </div>
                <div className="inputSection">
                    <p className="formLabel">Password</p>
                    <input className="addTestInput shadow" type="password" placeholder="password"
                    onChange={this.onPasswordChange} />
                </div>
                <button className="addButton shadow" onClick={this.onSubmit}>Log In</button>
            </div>
        )
    }
}
    

export default Register;