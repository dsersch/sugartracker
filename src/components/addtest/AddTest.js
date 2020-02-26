import React from 'react';
import './AddTest.css';

const AddTest = () => {
    return (
        <div className="addTest">
            <h2>Add Test</h2>
            <div className="inputSection">
                <p className="label">time</p>
                <input type="time" className="addTestInput time"/>
            </div>
            <div className="inputSection">
                <p className="label">fasting:  </p>
                <input type="checkbox" />
            </div>
            <div className="inputSection">
                <p className="label">Result</p>
                <input type="number" className="addTestInput number"/>
            </div>
            <p className="notesLabel">Notes</p>
            <input type="textbox" className="addTestInput"/>
            <button className="addButton">Add Result</button>
        </div> 
    )
}

export default AddTest;

// time
// fasting y/n 
// result
// notes