import React, { Component } from 'react';

class TimerSettings extends Component {

    render() {
        return (
            <div className="row center-block setTimer">
                <div className="form-group">
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="hours">Hours</label>
                        </div>
                        <div className="col-sm-9">
                            <input id="hours" type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="minutes">Minutes</label>
                        </div>
                        <div className="col-sm-9">
                            <input id="minutes" type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="row input-row">
                        <div className="col-sm-3">
                            <label htmlFor="seconds">Seconds</label>
                        </div>
                        <div className="col-sm-9">
                            <input id="seconds" type="number" className="form-control" />
                        </div>
                    </div>

                </div>
            </div>
        );

    }
}

export default TimerSettings;
