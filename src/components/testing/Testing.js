import React, { Component } from 'react';
import './Testing.css';

class Testing extends Component {
    constructor (props) {
        super(props);
        this.state = {
            lancets: 0,
            strips: 0
        }
    }

    render() {
        return (
            <div className='testing'>
                <h1>Number of Lancets remaining: {this.state.lancets}</h1>
                <h1>Number of Strips remaining: {this.state.strips}</h1> 
                <button className='addButton shadow'>Add Supplies</button>
            </div>
        )
    }
}

export default Testing;