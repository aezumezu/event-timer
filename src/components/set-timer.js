import React from 'react';
import { Link } from 'react-router';

class SetClockTime extends React.Component {
  constructor() {
    super();
    this.setTime = this.setTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
  }

  convertTime(hr, min, sec) {
    hr = hr ? parseInt(hr, 10) : 0;
    min = min ? parseInt(min, 10) : 0;
    sec = sec ? parseInt(sec, 10) : 0;

    return (hr * 60 * 60) + (min * 60) + parseInt(sec, 10);
  }

  setTime() {
    const hr = document.getElementById('hrs').value
    const min = document.getElementById('mins').value
    const sec = document.getElementById('secs').value;
    const time = this.convertTime(hr, min, sec);
    const title = document.getElementById('title').value;
    this.props.route.setTime(time, title);
  }

  render() {
    return (
      <div className="collect-data">
        <label htmlFor="title">Speech Title</label><br />
        <input id="title" type="text" /><br />
        <label htmlFor="time">*Time</label><br />
        <div className="time-div">
          <input id="hrs" type="number" min="00" placeholder="HH" />
          <input id="mins" type="number" min="00" max="59" placeholder="MM" />
          <input id="secs" type="number" min="00" max="59" placeholder="SS" />
        </div>
        <Link to="/showclock"><input type="button" value="Start CountDown" onClick={this.setTime} /></Link>
      </div>
    );
  }
};

export default SetClockTime;