import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerSettings from './TimerSettings';

class Timer extends Component {
    constructor() {
        super()

        this.state = {
            currentTimeState: moment.duration(25, 'minutes')
        }
    }

    render() {
        return (
            <div>
                <TimerDisplay currentTime={this.state.currentTimeState}/>
                <TimerButton />
                <TimerSettings />
            </div>
        );
    }
}

export default Timer;
