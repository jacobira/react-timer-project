import React, { Component } from 'react';
import './timer.css';

export class Timer extends Component {

    timerName = "(Timer Name)";
    timerTime = "0:00";
    timerStartStop = "Start";

    render() {
        return (
            <div className="timer-box">
                <div className="timer-content">
                    <div className="timer-name">
                        {this.timerName}
                    </div>
                    <div className="timer-numbers">
                        {this.timerTime}
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="button start-stop">
                        {this.timerStartStop}
                    </div>
                    <div className="button edit-delete">
                        <div className="edit">
                            Edit
                        </div>
                        <div className="delete">
                            {/*trash can icon here*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
