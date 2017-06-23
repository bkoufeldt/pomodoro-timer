import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerSettings from './TimerSettings';

class Timer extends Component {
    constructor() {
        super()

        this.state = {
            currentTimeState: moment.duration(25, 'minutes'),
        }

        this.setCurrentTime = this.setCurrentTime.bind(this)
    }

    setCurrentTime(newCurrentTime) {
        if (newCurrentTime < 0) {
            return 0;
        }
        this.setState({
            currentTimeState: newCurrentTime
        })
    }

    render() {
        return (
            <div>
                <TimerDisplay currentTime={this.state.currentTimeState}/>
                <TimerButton />
                <TimerSettings currentTime={this.state.currentTimeState} setCurrentTime={this.setCurrentTime}/>
            </div>
        );
    }
}

export default Timer;
