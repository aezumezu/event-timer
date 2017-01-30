import React from 'react';
import ReactHighcharts from 'react-highcharts';

export default class ShowCountDown extends React.Component {
  constructor() {
    super();
    this.renderClock = this.renderClock.bind(this);
    this.renderSummary = this.renderSummary.bind(this);
  }

  renderClock() {
    const options = this.props.options();
    const stopTimer = this.props.stopTimer;
    return (
      <div>
        <button onClick={stopTimer.bind(null, true)}>Stop Timer</button>
        <ReactHighcharts config={options} />
      </div>
    );
  }

  renderSummary() {
    const records = this.props.data;
    const record = records[records.length - 1];

    return (
      <div>
        <label>Speech Title</label>: {record.title}<br />
        <label>Time Alloted</label>: {record.time}<br />
        <label>Time Used</label>: {record.timeUsed}<br />
        <div onClick={this.props.setView.bind(null, 'SetClockTime')}>Start New Count</div>
      </div>
    );
  }

  render() {
    const renderBody = this.props.timerRunning ? this.renderClock() :
      this.renderSummary();
    console.log(renderBody);
    return (
      <div>
        {renderBody}
      </div>
    );
  }
};
