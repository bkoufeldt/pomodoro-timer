import React, { Component } from 'react';
import './App.css';
import background from './images/hourglass.jpg'


const divStyle = {
    // color: 'blue',
    width: '100%'

};

class App extends Component {

  render() {
    return (
        <div className="panel app-content">

            <div className="panel-body">
                <img src={background} style={divStyle}/>
                <h2 className='text-center'>Timer App</h2>
                <div className="center-block">
                    <div className="row">
                        <h2 className="text-center">00:00:00</h2>
                    </div>
                    <div className="row">
                        <button className="btn btn-success center-block">Start</button>
                    </div>
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
                </div>
            </div>
        </div>
    );
  }
}

export default App;
