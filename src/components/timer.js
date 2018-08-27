import React, { Component } from 'react';
import './timer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Timer extends Component {

    constructor(props){
        super(props);

        this.startStop = this.startStop.bind(this);
        this.countDown = this.countDown.bind(this);
        this.numberFormat = this.numberFormat.bind(this);
        this.deleteTimer = this.deleteTimer.bind(this);
    }


    render() {
        return (
            <div className="timer-box" id={this.props.num + "timer-box"}>
                <div className="timer-content">
                    <div className="timer-name" contentEditable={true}>
                        (Timer Name)
                    </div>
                    <div className="timer-numbers">
                        <div id={this.props.num + "timer-value1"} contentEditable={true}>00</div>:
                        <div id={this.props.num + "timer-value2"} contentEditable={true}>02</div>:
                        <div id={this.props.num + "timer-value3"} contentEditable={true}>30</div>
                    </div>
                </div>
                <div className="box-bottom">
                    <div className="button start" id={this.props.num + "start-stop"} onClick={this.startStop}>
                        Start
                    </div>
                    <div className="delete">
                        <FontAwesomeIcon className="trash" icon="trash-alt" onClick={this.deleteTimer}/>
                    </div>
                </div>
            </div>
        )
    }


    startStop() {

        let element = document.getElementById(this.props.num + "start-stop");
        this.numberFormat();

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

    numberFormat(){

        let element1 = document.getElementById(this.props.num + "timer-value1");
        let element2 = document.getElementById(this.props.num + "timer-value2");
        let element3 = document.getElementById(this.props.num + "timer-value3");

        if (Number(element1.innerHTML) >=0 && Number(element1.innerHTML) <10){
            element1.innerHTML = "0" + (Number(element1.innerHTML)).toString();
        }
        if (Number(element2.innerHTML) >=0 && Number(element2.innerHTML) <10){
            element2.innerHTML = "0" + (Number(element2.innerHTML)).toString();
        }
        if (Number(element3.innerHTML) >=0 && Number(element3.innerHTML) <10){
            element3.innerHTML = "0" + (Number(element3.innerHTML)).toString();
        }

        if (Number(element1.innerHTML) > 59 || Number(element1.innerHTML < 0)){
            element1.innerHTML = "00";
            alert("Please enter correct time measurements");
            return
        }
        if (Number(element2.innerHTML) > 59 || Number(element2.innerHTML < 0)){
            element2.innerHTML = "00";
            alert("Please enter correct time measurements");
            return
        }
        if (Number(element3.innerHTML) > 59 || Number(element3.innerHTML < 0)){
            element3.innerHTML = "00";
            alert("Please enter correct time measurements");
        }
    }

    countDown() {

        let element1 = document.getElementById(this.props.num + "timer-value1");
        let element2 = document.getElementById(this.props.num + "timer-value2");
        let element3 = document.getElementById(this.props.num + "timer-value3");

        if (Number(element3.innerHTML) >= 1 && Number(element3.innerHTML) <=59){
            element3.innerHTML = (Number(element3.innerHTML) - 1).toString();
            if (Number(element3.innerHTML) < 10){
                element3.innerHTML = '0' + element3.innerHTML;
            }
            return;
        }

        if (Number(element3.innerHTML) === 0){

            if (Number(element2.innerHTML) === 0){
                element2.innerHTML = '00';

                if (Number(element1.innerHTML) > 0){
                    element1.innerHTML = (Number(element1.innerHTML) - 1).toString();

                    if (element1.innerHTML < 10){
                        element1.innerHTML = '0' + element1.innerHTML;
                    }

                    element2.innerHTML = "60";
                    element3.innerHTML = "00";
                }
                else {
                    this.startStop();
                    alert("Time's Up!");
                    return
                }
            }
            if (Number(element2.innerHTML) > 0){
                element2.innerHTML = (Number(element2.innerHTML) - 1).toString();
                if(Number(element2.innerHTML)<10){
                    element2.innerHTML = '0' + element2.innerHTML;
                }
                element3.innerHTML = '59';
            }

        }
    }

    deleteTimer() {
        this.startStop();
        document.getElementById(this.props.num + "timer-box").remove();
    }
}




