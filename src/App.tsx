import React, { Component } from 'react';
import './App.css';
import LightSwitch from './components/LightSwitch';
import Title from './components/Title';
import UserBoard from './components/UserBoard';
import logo from './logo.svg';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content="Hello World" />
          <LightSwitch />
          <UserBoard />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn with Codaisseur
          </a>
        </header>
      </div>
    );
  }
}

export default App;
