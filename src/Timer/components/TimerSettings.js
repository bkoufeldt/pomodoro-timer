import React, { Component } from 'react';

class TimerSettings extends Component {
    constructor() {
        super()

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const newCurrentTime = this.props.currentTime;
        if(event.target.id === 'hours') {
            newCurrentTime === newCurrentTime.subtract(newCurrentTime.get('hours'), 'hours').add(parseInt(event.target.value), 'hours');
        }
        if (event.target.id === 'minutes') {
            newCurrentTime === newCurrentTime.subtract(newCurrentTime.get('minutes'), 'minutes').add(parseInt(event.target.value), 'minutes');
        }
        if (event.target.id === 'seconds') {
            newCurrentTime === newCurrentTime.subtract(newCurrentTime.get('seconds'), 'seconds').add(parseInt(event.target.value), 'seconds');
        }

    this.props.setCurrentTime(newCurrentTime);
    }

    render() {
        return (
            <div className="row center-block setTimer">
                <div className="form-group">
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="hours">Hours</label>
                        </div>
                        <div className="col-sm-9">
                            <input
                                id="hours"
                                type="number"
                                min="0"
                                className="form-control"
                                defaultValue={this.props.currentTime.get('hours')}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="minutes">Minutes</label>
                        </div>
                        <div className="col-sm-9">
                            <input
                                id="minutes"
                                type="number"
                                min="0"
                                className="form-control"
                                defaultValue={this.props.currentTime.get('minutes')}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="seconds">Seconds</label>
                        </div>
                        <div className="col-sm-9">
                            <input
                                id="seconds"
                                type="number"
                                min="0"
                                className="form-control"
                                defaultValue={this.props.currentTime.get('seconds')}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default TimerSettings;
