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
    const hr = document.getElementById('hrs').value;
    const min = document.getElementById('mins').value;
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
      <div>
        <form className="form">
          <input className="form-control" placeholder="Speech Title" id="title" type="text" /><br />
          <label id="time-enter">Please enter the time...</label>
          <div>
            <input id="hrs" className="form-control" type="number" min="00" placeholder="HH" />
            <input id="mins" className="form-control" type="number" min="00" max="59" placeholder="MM" />
            <input id="secs" className="form-control" type="number" min="00" max="59" placeholder="SS" />
          </div>
          <input className="btn btn-success start-btn" type="button" value="Start CountDown" onClick={this.setTime} />
        </form>
      </div>
    );
  }
};

export default SetClockTime;