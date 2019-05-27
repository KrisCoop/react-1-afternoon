import React, { Component } from 'react';


export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    assignEvenAndOdds(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for ( let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push( parseInt(arr[i], 10) );
            } else {
                odds.push( parseInt(arr[i], 10) );
            }
        }

        this.setState({ evenArray: evens, oddArray: odds})
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    render () {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className="inputLine"></input>
                <button className="confirmationButton" onCLick={ () => {this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray) } }</span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

// resume on readme file line 535 :)

/// old button:

// <button className="confirmationButton" onChange={ (e)=> this.handleChange(e.target.value)}></button>