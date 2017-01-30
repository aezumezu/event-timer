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
      <div className="header">
        <h1>TimeMaster</h1>
        <div style={{ marginTop: '-100px' }}>
          <div id="home-link" className="link" onClick={setView.bind(null, 'SetClockTime')} >
            Home
          </div>
          <div id="session-link" className="link" onClick={setView.bind(null, 'SessionRecords')} >
            Show Session Records
          </div>
        </div>
      </div>
    );
  }
};
