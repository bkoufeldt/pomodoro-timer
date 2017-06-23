import React from 'react';
import background from '../../images/hourglass.jpg';
import '../css/TimerDisplay.css';
import { COMPLETE } from '../../timerStates';

const TimerDisplay = (props) => {
    // format the timer display 00:00:00
    const leftPad = (val) => {return (val < 10) ? `0${val}` : `${val}`}

    const divStyle = {
        width: '100%'
    }

    return (
        <div>
            <div className="row center-block">
                {
                    (props.timerState === COMPLETE) ?
                    <iframe
                        className="youtube-responsive-width"
                        height="400"
                        style={divStyle}
                        src="https://www.youtube.com/embed/DJjJeohh7Vk?autoplay=1&start=5&controls=0&showinfo=0&frameborder=0">
                    </iframe> :
                    <img src={background} style={divStyle} alt="woman looking at hourglass"/>
                }
            </div>
            <h2 className='text-center heading'>The Hourglass</h2>
            <div className="row">
                <h2 className="text-center display">
                    {leftPad(props.currentTime.get('hours'))}:
                    {leftPad(props.currentTime.get('minutes'))}:
                    {leftPad(props.currentTime.get('seconds'))}
                </h2>
            </div>
        </div>
    );
}

export default TimerDisplay;
