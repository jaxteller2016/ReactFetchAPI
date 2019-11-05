import React from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateQuote  from './GenerateQuote';
import  DisplayQuote  from './DisplayQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // we can set up our sampleEmployee as the default
      // to always display an employee
      quote: ""
    }
  }
  componentDidMount() {
    //this.getEmployee()
  }

  getQuote() {
    // Employee collection via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(response  =>  response.json())
        .then(data  => {
          // Once the data is collected, we update our state with the new data
          this.setState({
            quote:  data[0],
          });
        });
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GenerateQuote selectEmployee={() =>  this.getQuote()}  />
        <DisplayQuote  quote={this.state.quote}  />
      </header>
    </div>
  );
}}

export default App;


