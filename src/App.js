import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Link } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <nav>
          <Link to="/smth" >something</Link>
          {' '}
          <Link to="/els" >something else </Link>
        </nav>
        <Router>
          <Content0 path="/"/>
          <Content1 path="smth" />
          <Content2 path="els" />
        </Router>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

const Content0 = () => (
  <div>
    <h1>Content0</h1>
  </div>
)
const Content1 = () => (
  <div>
    <h1>Content1</h1>
  </div>
)
const Content2 = () => (
  <div>
    <h1>Content2</h1>
  </div>
)