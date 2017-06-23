import React from 'react';
import background from '../../images/hourglass.jpg';
import '../css/TimerDisplay.css'

const TimerDisplay = (props) => {
    // format the timer display 00:00:00
    const leftPad = (val) => {return (val < 10) ? `0${val}` : `${val}`}

    const divStyle = {
        width: '100%'
    }

    return (
        <div>
            <img src={background} style={divStyle} alt="woman looking at hourglass"/>
            <h2 className='text-center heading'>The Hourglass</h2>
            <div className="row">
                <h2 className="text-center">
                    {leftPad(props.currentTime.get('hours'))}:
                    {leftPad(props.currentTime.get('minutes'))}:
                    {leftPad(props.currentTime.get('seconds'))}
                </h2>
            </div>
        </div>
    );
}

export default TimerDisplay;
