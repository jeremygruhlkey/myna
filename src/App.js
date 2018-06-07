import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar.js"
import Header from "./components/Header/Header.js"

// import Home from "./components/Home/Home.js"

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App;
