import React from 'react';

export default class Header extends React.Component {
  componentDidUpdate() {
    const disable = this.props.timerRunning;
    if (disable) {
      document.getElementById('home-link').style.pointerEvents = 'none';
      document.getElementById('session-link').style.pointerEvents = 'none';
    } else {
      document.getElementById('home-link').style.pointerEvents = 'auto';
      document.getElementById('session-link').style.pointerEvents = 'auto';
    }
  }

  render() {
    const setView = this.props.setView;

    return (
      <div>
        <h2>Toastmasters TimeBomb</h2>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="active" id="home-link" onClick={setView.bind(null, 'SetClockTime')}>
              <a data-toggle="tab">Home</a>
            </li>
            <li id="session-link" onClick={setView.bind(null, 'SessionRecords')}>
              <a data-toggle="tab">Session Records</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};
