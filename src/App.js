import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js"
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home.js"

// import './App.css';

const App = () =>
  <Router>
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/starred" component={Starred} /> */}
      </Switch>
    </div>
  </Router>;

export default App;
