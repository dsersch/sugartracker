import React, { Component } from 'react';
import './Home.css';

class Home extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            testResults: []
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/home', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({userid: this.props.userid})
        }).then((response) => response.json())
        .then((res) => {
          this.setState({testResults: res});
        }).catch((error) => {
          console.error('Error:', error);
        });
    }

    generateStats = () => {
        if (this.state.testResults.length === 0) {
            return <h1>no results...</h1>
        } else {
            const last = this.state.testResults[0].sugar
            let fastingTotal = 0
            let fastingTests = 0
            let afterFoodTotal = 0
            let afterFoodTests = 0
            this.state.testResults.forEach((test) => {
                if (test.fasting) {
                    fastingTotal += test.sugar;
                    fastingTests++
                } else {
                    afterFoodTotal += test.sugar;
                    afterFoodTests++
                } 
            })
            return (
                <div className='homeInfo'>
                    <h1>Basic info</h1>
                    <p>last test was: {last}</p>
                    <p>last test date here...</p>
                    <p>fasting average: {fastingTotal/fastingTests}</p>
                    <p>after food average:{afterFoodTotal/afterFoodTests}</p>
                </div>
            )
        }
    }
    
    
    render() {
         return this.generateStats()
    }  
}

export default Home;