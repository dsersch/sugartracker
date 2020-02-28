import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div className='homeInfo'>
            <h1>Basic info</h1>
            <p>last test was: {props.last}</p>
            <p>last test date here...</p>
            <p>fasting average: {props.fastingAVG} </p>
            <p>after food average: {props.afterFoodAVG}</p>
        </div>
    )
}

export default Home;