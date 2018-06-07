import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar.js"
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Myna</h1>
        </header>
        <p className="App-intro">
          A place to discover new authors and great short stories.
        </p>
      </div>
    );
  }
}

export default App;
