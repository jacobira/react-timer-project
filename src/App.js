import React, { Component } from 'react';
import './App.css';
import { Timer } from './components/timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Timer />
          <div className="addTimer" onClick={addTimer}>
            Add Timer
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const addTimer = function() {
    console.log("'Add Timer' clicked");
};