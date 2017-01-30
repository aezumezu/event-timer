import React from 'react';

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
    if (!hr && !min && !sec) {
      alert('You have not set the time!');
      return;
    }
    const time = this.convertTime(hr, min, sec);
    if (time < 1) {
      alert('Time is invalid');
      return;
    }
    const title = document.getElementById('title').value;
    this.props.setTime(time, title);
  }

  render() {
    return (
      <div className="collect-data">
        <form>
          <label htmlFor="title">Speech Title</label><br />
          <input id="title" type="text" /><br />
          <label htmlFor="time">*Time</label><br />
          <div className="time-div">
            <input id="hrs" type="number" min="00" placeholder="HH" />
            <input id="mins" type="number" min="00" max="59" placeholder="MM" />
            <input id="secs" type="number" min="00" max="59" placeholder="SS" />
          </div>
          <input type="button" value="Start CountDown" onClick={this.setTime} />
        </form>
      </div>
    );
  }
};

export default SetClockTime;