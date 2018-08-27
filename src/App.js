import React, { Component } from 'react';
import './App.css';
import { Timer } from './components/timer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt);

class App extends Component {

  constructor(props){
      super(props);
      this.addTimer = this.addTimer.bind(this);
      this.state = {timers: [<Timer key={this.numOfTimers} num={this.numOfTimers} />]};
  }

  numOfTimers = 1;

  render() {

    return (
      <div className="App">
        <div className="content" id="contentBox">
            {this.state.timers}
        </div>
        <div className="addTimer" onClick={this.addTimer}>
          Add Timer
        </div>
      </div>
    );
  }

  addTimer(){
    this.numOfTimers = this.numOfTimers + 1;
    this.state.timers.push(<Timer key={this.numOfTimers} num={this.numOfTimers} />);
    this.setState({
        timers: this.state.timers
    })

  }
}
export default App;

