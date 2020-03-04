import React from 'react';
import './Nav.css';

const Nav = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div className='navBar'>
                <p className='navButton' onClick={() => onRouteChange('home')}>home</p>
                <p className='navButton' onClick={() => onRouteChange('addTest')}>add test</p>
                <p className='navButton' onClick={() => onRouteChange('signout')}>sign out</p>
            </div>
        )
    } else {
        return (
            <div className='navBar'>
                <p className='navButton' onClick={() => onRouteChange('register')}>Register</p>
                <p className='navButton' onClick={() => onRouteChange('signin')}>Sign In</p>
            </div>
        )
    }
    
};

export default Nav;