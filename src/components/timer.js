import React, { Component } from 'react';
import './timer.css';

export class Timer extends Component {

    render() {
        return (
            <div className="timer-box">
                <div className="timer-content">
                    <div className="timer-name">
                        (Timer Name)
                    </div>
                    <div className="timer-numbers">
                        0:00
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="button start" id="start-stop" onClick={this.startStop}>
                        Start
                    </div>
                    <div className="edit-delete">
                        <div className="button edit">
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

    startStop() {

        let element = document.getElementById("start-stop");

        if (element.innerHTML === "Start"){
            element.innerHTML = "Stop";
            element.classList.remove("start");
            element.classList.add("stop");
            console.log("Timer started");
            return;
        }

        if (element.innerHTML === "Stop"){
            element.innerHTML = "Start";
            element.classList.remove("stop");
            element.classList.add("start");
            console.log("Timer stopped");
        }
    }
}




