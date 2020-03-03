import React from 'react';
import './Nav.css';

const Nav = ({ onRouteChange }) => {
    return (
        <div className='navBar'>
            <p className='navButton' onClick={() => onRouteChange('home')}>home</p>
            <p className='navButton' onClick={() => onRouteChange('addTest')}>add test</p>
            <p className='navButton' onClick={() => onRouteChange('signout')}>sign out</p>
        </div>
    )
};

export default Nav;