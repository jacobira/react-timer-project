import React, { Component } from 'react';
import './timer.css';

export class Timer extends Component {

    constructor(props){
        super(props);
        this.startStop = this.startStop.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    interval;

    render() {
        return (
            <div className="timer-box">
                <div className="timer-content">
                    <div className="timer-name">
                        (Timer Name)
                    </div>
                    <div className="timer-numbers">
                        <div id="timer-value1">00</div>:
                        <div id="timer-value2">01</div>:
                        <div id="timer-value3">00</div>
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
            this.interval = setInterval(this.countDown, 1000);
            return;
        }

        if (element.innerHTML === "Stop"){
            element.innerHTML = "Start";
            element.classList.remove("stop");
            element.classList.add("start");
            clearInterval(this.interval);
            console.log("Timer stopped");
        }
    }

    countDown() {

        let element1 = document.getElementById("timer-value1");
        let element2 = document.getElementById("timer-value2");
        let element3 = document.getElementById("timer-value3");

        if (Number(element3.innerHTML) >= 1 && Number(element3.innerHTML) <=59){
            element3.innerHTML = (Number(element3.innerHTML) - 1).toString();
        }

        if (Number(element3.innerHTML) === 0){

            if (Number(element2.innerHTML) === 0){
                if (Number(element1.innerHTML) > 0){
                    element1.innerHTML = (Number(element1.innerHTML) - 1).toString();
                }
                if (Number(element1.innerHTML) === 0){
                    alert("End of timer!");
                    console.log("Timer concluded.");
                    clearInterval(this.interval);
                    this.startStop();
                }
            }
            if (Number(element2.innerHTML) > 0){
                element2.innerHTML = (Number(element2.innerHTML) - 1).toString();
                element3.innerHTML = '59';
            }

        }
    }
}




