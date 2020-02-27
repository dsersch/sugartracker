import React, { Component } from 'react';
import './AddTest.css';

class AddTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fasting: '',
            sugar: '',
            notes: ''
        }
    }

    onFastingChange = (event) => {
        this.setState({fasting: event.target.value})
    }

    onSugarChange = (event) => {
        this.state({sugar: event.target.value})
    }

    onNotesChange = (event) => {
        this.state({notes: event.target.value})
    }

    render() {
        return (
            <div className="addTest">
                <h2>Add Test</h2>
                <div className="inputSection">
                    <p className="label">fasting:  </p>
                    <input onChange={this.onFastingChange} type="checkbox" />
                </div>
                <div className="inputSection">
                    <p className="label">Result</p>
                    <input onChange={this.onSugarChange} type="number" className="addTestInput number"/>
                </div>
                <p className="notesLabel">Notes</p>
                <input onChange={this.onNotesChange} type="textbox" className="addTestInput"/>
                <button className="addButton">Add Result</button>
            </div> 
        )
    }  
}

export default AddTest;

// time
// fasting y/n 
// result
// notes