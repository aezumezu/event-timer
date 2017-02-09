import React from 'react';

class SetClockTime extends React.Component {
  constructor() {
    super();
    this.state = {
      hr: '',
      min: '',
      sec: ''
    };
    this.setTime = this.setTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
  }

  convertTime(hr, min, sec) {
    hr = hr ? parseInt(hr, 10) : 0;
    min = min ? parseInt(min, 10) : 0;
    sec = sec ? parseInt(sec, 10) : 0;

    return (hr * 60 * 60) + (min * 60) + parseInt(sec, 10);
  }

  setTime() {
    const hr = this.state.hr;
    const min = this.state.min;
    const sec = this.state.sec;
    const time = this.convertTime(hr, min, sec);
    const title = document.getElementById('title').value;
    this.props.setTime(time, title);
  }

  handleTimeInput(e) {
    e.preventDefault();
    const hr = e.target.id === 'hrs' ? e.target.value : this.state.hr;
    const min = e.target.id === 'mins' ? e.target.value : this.state.min;
    const sec = e.target.id === 'secs' ? e.target.value : this.state.sec;
    this.setState({hr, min, sec});
  }

  render() {
    const disabled = parseInt(this.state.hr, 10) || parseInt(this.state.min, 10) ||
      parseInt(this.state.sec, 10);
    return (
      <div>
        <form className="form">
          <input className="form-control" placeholder="Speech Title" id="title" type="text" /><br />
          <label id="time-enter">Please enter the time...</label>
          <div>
            <input id="hrs" onChange={this.handleTimeInput} placeholder='HH'
              value={this.state.hr} className="form-control" type="number" min="00" />
            <input id="mins" onChange={this.handleTimeInput} placeholder='MM'
              value={this.state.min} className="form-control" type="number" min="00" max="59" />
            <input id="secs" onChange={this.handleTimeInput} placeholder='SS'
              value={this.state.sec} className="form-control" type="number" min="00" max="59" />
          </div>
          <input className="btn btn-success start-btn" type="button" disabled={!disabled}
            value="Start CountDown" onClick={this.setTime} />
        </form>
      </div>
    );
  }
};

export default SetClockTime;