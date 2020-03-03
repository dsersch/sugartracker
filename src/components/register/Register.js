import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
        <div className="registerForm">
            <h2>Sign Up</h2>
            <div className="inputSection">
                <p className="formLabel">Email</p>
                <input className="addTestInput" type="text" placeholder="email"/>
            </div>
            <div className="inputSection">
                <p className="formLabel">Password</p>
                <input className="addTestInput" type="password" placeholder="password"/>
            </div>
            <button className="addButton">Register</button>
        </div>
    )
}

export default Register;