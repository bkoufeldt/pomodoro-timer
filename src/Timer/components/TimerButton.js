import React, { Component } from 'react';

class TimerButton extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="row">
                <button className="btn btn-success center-block">Start</button>
            </div>
        );
    }
}

export default TimerButton;
