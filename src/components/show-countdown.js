import React from 'react';
import ToTimeFormat from '../helpers/to-time-format';

export default class ShowCountDown extends React.Component {
  constructor() {
    super();
    this.renderClock = this.renderClock.bind(this);
    this.renderSummary = this.renderSummary.bind(this);
  }

  renderClock() {
    const record = this.props.lastRecord;
    const stopTimer = this.props.stopTimer;
    const timeRemaining = ToTimeFormat(record.timeRemaining);
    const timeUsed = ToTimeFormat(record.timeUsed);

    return (
      <div>
        <button onClick={stopTimer.bind(null, true)}>Stop Timer</button>
        <div>
          <div>
            {timeRemaining}
            Time Remaining
          </div>
          <div>
            {timeUsed}
            Time Used
          </div>
        </div>
      </div>
    );
  }

  renderSummary() {
    const records = this.props.data;
    const record = records[records.length - 1];

    return (
      <div>
        <label>Speech Title</label>: {record.title}<br />
        <label>Time Allotted</label>: {ToTimeFormat(record.time)}<br />
        <label>Time Used</label>: {ToTimeFormat(record.timeUsed)}<br />
        <div onClick={this.props.setView.bind(null, 'SetClockTime')}>Start New Count</div>
      </div>
    );
  }

  render() {
    const renderBody = this.props.timerRunning ? this.renderClock() :
      this.renderSummary();
    return (
      <div>
        {renderBody}
      </div>
    );
  }
};
