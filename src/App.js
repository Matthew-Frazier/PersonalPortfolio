import React, { Component, } from 'react';
import './App.css';
import { Switch, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";

class App extends Component {
  render() {
    return(
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
        </Switch>
      </>
    )
  }
}

export default App;
