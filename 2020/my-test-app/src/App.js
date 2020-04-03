import React, { Component } from "react";
import logo from "./logo.svg";
import { PersonalInfo } from "./PersonalInfo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      location: "",
      age: 0
    };
  }
  componentDidMount() {
    this.setState({
      name: "Liem",
      location: "Milan",
      age: 23
    });
  }
  render() {
    const { name, location, age } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PersonalInfo name={name} location={location} age={age} />
        </header>
      </div>
    );
  }
}

export default App;
