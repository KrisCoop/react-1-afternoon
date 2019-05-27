import React, { Component } from 'react';

export default class FilterObject extends Component {
constructor() {
    super();

    this.state = {
        employees: [
            {
                char: 'Kensei',
                type: 'Vanguard',
                faction: 'Samurai'
            },
            {
                char: 'Berserker',
                type: 'Assassin',
                faction: 'Vikings'
            },
            {
                char: 'Lawbringer',
                type: 'Hybrid',
                faction: 'Knights'
            }],
            
        userInput: '',
        filteredEmployees: []
        }
    }

    handleChange(val) {
    this.setState({ userInput: val });
    }

    filterEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];

        for ( let i = 0; i < employees.length; i++ ) {
            if ( employees[i].hasOwnProperty(prop) ) {
                filteredEmployees.push(employees[i]);
            }
        }

        this.setState({ filteredEmployees: filteredEmployees });
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
              <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
              <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
              <button className="confirmationButton" onClick={ () => this.filterEmployees(this.userInput) }> Filter </button>
              <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
              <h4>Filter Object</h4>
            </div>
        )
    }
}