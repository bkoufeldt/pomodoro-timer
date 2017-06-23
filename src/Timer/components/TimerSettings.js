import React, { Component } from 'react';

class TimerSettings extends Component {
    constructor() {
        super()

        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderLabelsInputs = this.renderLabelsInputs.bind(this);
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

    renderLabelsInputs(unit, label) {
        return (<div className="row input-row">
                    <div className="col-sm-3"><label htmlFor={unit}>{label}</label></div>
                    <div className="col-sm-9">
                        <input
                            id={unit}
                            type="number"
                            min="0"
                            className="form-control"
                            defaultValue={this.props.currentTime.get(unit)}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>);
    }

    render() {
        return (
            <div className="row center-block setTimer">
                <div className="form-group">
                    {this.renderLabelsInputs('hours', 'Hours')}
                    {this.renderLabelsInputs('minutes', 'Minutes')}
                    {this.renderLabelsInputs('seconds', 'Seconds')}
                </div>
            </div>
        );

    }
}

export default TimerSettings;
