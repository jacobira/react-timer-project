import React, { Component } from 'react';
import './App.css';
import { Timer } from './components/timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Timer />
      </div>
    );
  }
}

export default App;
