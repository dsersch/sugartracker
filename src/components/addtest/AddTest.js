import React, { Component } from 'react';
import Testing from '../testing/Testing.js'
import './AddTest.css';

class AddTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.id,
            fasting: true,
            sugar: '',
            notes: ''
        }
    }

    onFastingChange = (event) => {
        this.setState({fasting: event.target.checked})
    }

    onSugarChange = (event) => {
        this.setState({sugar: event.target.value})
    }

    onNotesChange = (event) => {
        this.setState({notes: event.target.value})
    }

    onSubmit = () => {
        if (this.state.sugar === '') {
            alert('Please add a test result.')
        } else {
            fetch('http://localhost:3001/addTest', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state)
            })
            .then((response) => response.json())
            .then((res) => {
              this.props.onRouteChange('home');
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } 
    }

    render() {
        return (
            <div>
                <Testing />
                <div className="addTest shadow">
                    <h2>Add Test</h2>
                    <div className="inputSection">
                        <p className="label">fasting:  </p>
                        <input onChange={this.onFastingChange} type="checkbox" checked={this.state.fasting} />
                    </div>
                    <div className="inputSection">
                        <p className="label">Result</p>
                        <input onChange={this.onSugarChange} type="number" className="addTestInput shadow number"/>
                    </div>
                    <p className="notesLabel">Notes</p>
                    <input onChange={this.onNotesChange} type="textbox" className="addTestInput shadow"/>
                    <button onClick={this.onSubmit} className="addButton shadow">Add Result</button>
                </div> 
            </div>
        )
    }  
}

export default AddTest;

// time
// fasting y/n 
// result
// notes