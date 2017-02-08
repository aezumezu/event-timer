import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.renderBody = this.renderBody.bind(this);
  }

  renderBody(setView) {
    let body;
    const menu = <ul className="nav navbar-nav">
      <li className="active" id="home-link" onClick={setView.bind(null, 'SetClockTime')}>
        <a data-toggle="tab">Home</a>
      </li>
      <li id="session-link" onClick={setView.bind(null, 'SessionRecords')}>
        <a data-toggle="tab">Session Records</a>
      </li>
    </ul>
    const message = <p className="timer-alert">You need to stop the timer before you go back to home</p>
    body = this.props.timerRunning ? message : menu;
    return body;
  }

  render() {
    const setView = this.props.setView;

    return (
      <div>
        <h2>Toastmasters TimeBomb</h2>
        <nav className="navbar navbar-default">
          {this.renderBody(setView)}
        </nav>
      </div>
    );
  }
};
