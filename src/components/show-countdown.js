import React from 'react';
import ToTimeFormat, { breakUpTime } from '../helpers/to-time-format';

export default class ShowCountDown extends React.Component {
  constructor() {
    super();
    this.renderClock = this.renderClock.bind(this);
    this.renderSummary = this.renderSummary.bind(this);
  }

  renderClock() {
    const record = this.props.lastRecord;
    const stopTimer = this.props.stopTimer;
    const timeRemaining = breakUpTime(ToTimeFormat(record.timeRemaining));
    const extraTime = record.timeUsed - record.time;
    const showExtraTime = extraTime > 0 ? `+${ToTimeFormat(extraTime)}` : '';

    return (
      <div>
        <div>
          <div id="time-left">
            <hr className="time-hr" />
            <div className="pie-container">
              <div className="pie-bg">{timeRemaining.hr}</div>
              <div className="pie-slice" className="hold"><div className="pie"></div></div>
            </div>
            <div className="pie-container">
              <div className="pie-bg">{timeRemaining.min}</div>
              <div className="pie-slice" className="hold"><div className="pie"></div></div>
            </div>
            <div className="pie-container">
              <div className="pie-bg">{timeRemaining.sec}</div>
              <div className="pie-slice" className="hold"><div className="pie"></div></div>
            </div>
          </div>
          <div id="">
            {showExtraTime}
          </div>
        </div>
        <button className="btn btn-danger stop-btn" onClick={stopTimer.bind(null, true)}>Stop Timer</button>
      </div>
    );
  }

  renderSummary() {
    const records = this.props.data;
    const record = records[records.length - 1];

    return (
      <div>
        <div className="table-responsive">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th>Speech Title</th>
                <td>{record.title}</td>
              </tr>
              <tr>
                <th>Time Allotted</th>
                <td>{ToTimeFormat(record.time)}</td>
              </tr>
              <tr>
                <th>Time Used</th>
                <td>{ToTimeFormat(record.timeUsed)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <input className="btn btn-primary start-btn" type="button" value="Start New Count" onClick={this.props.setView.bind(null, 'SetClockTime')} />
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
