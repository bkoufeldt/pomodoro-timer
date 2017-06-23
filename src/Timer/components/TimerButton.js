import React, { Component } from 'react';
import { RUNNING, COMPLETE } from '../../timerStates';

class TimerButton extends Component {
    constructor() {
        super()

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        if (this.props.timerState === RUNNING) {
            return  (<button className="btn btn-danger center-block" onClick={this.props.stopTimer}>
                        Stop
                    </button>);
        } else if (this.props.timerState === COMPLETE) {
            return  (<button className="btn btn-info center-block" onClick={this.props.resetTimer}>
                        Reset
                    </button>);
        } else {
            return  (<button className="btn btn-success center-block" onClick={this.props.startTimer}>
                        Start
                    </button>);
        }
    }

    render() {
        return <div className="row"> {this.getButton()}</div>;
    }
}

export default TimerButton;
