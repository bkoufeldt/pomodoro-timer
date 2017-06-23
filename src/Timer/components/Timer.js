import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerSettings from './TimerSettings';
import * as timerStates from '../../timerStates'

class Timer extends Component {
    constructor() {
        super()

        this.state = {
            currentTimeState: moment.duration(25, 'minutes'),
            timerState: timerStates.NOT_RUNNING,
            countDown: null
        }

        this.setCurrentTime = this.setCurrentTime.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.reduceTimer = this.reduceTimer.bind(this);
        this.completeTimer = this.completeTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }
    
    // set currentTimeState, if user enters neg. value returns 0
    setCurrentTime(newCurrentTime) {
        if (newCurrentTime < 0) {
            return 0;
        }
        this.setState({
            currentTimeState: newCurrentTime
        })
    }

    startTimer() {
        this.setState({
            timerState: timerStates.RUNNING,
            countDown: setInterval(this.reduceTimer, 1000)
        })
    }

    stopTimer() {
        if (this.state.countDown) {
            clearInterval(this.state.countDown);
        }

        this.setState({
            timerState: timerStates.NOT_RUNNING,
            countDown: null
        })
    }
    // if timer is finished, calls completeTimer, else continues reducing
    // currentTimeState by 1
    reduceTimer() {
        if(this.state.currentTimeState.get('hours') === 0 &&
           this.state.currentTimeState.get('minutes') === 0 &&
           this.state.currentTimeState.get('seconds') === 0) {
               this.completeTimer();
               return;
           }

        const newTime = this.state.currentTimeState;
        newTime.subtract(1, 'seconds');
        this.setState({
            currentTimeState: newTime
        })
    }

    completeTimer() {
        if(this.state.countDown) {
            clearInterval(this.state.countDown)
        }

        this.setState({
            timerState: timerStates.COMPLETE,
            countDown: null
        })
    }

    resetTimer() {
        this.setState({
            timerState: timerStates.NOT_RUNNING,
            currentTimeState: moment.duration(25, 'minutes')
        })
    }

    render() {
        return (
            <div>
                <TimerDisplay currentTime={this.state.currentTimeState}/>
                <TimerButton startTimer={this.startTimer}
                             stopTimer={this.stopTimer}
                             resetTimer={this.resetTimer}
                             timerState={this.state.timerState}

                             />
                {(this.state.timerState !== timerStates.RUNNING) ?
                <TimerSettings
                    currentTime={this.state.currentTimeState}
                    setCurrentTime={this.setCurrentTime}
                /> : ''
                }
            </div>
        );
    }
}

export default Timer;
