import React from 'react';

export default class Header extends React.Component {
  render() {
    const setView = this.props.setView;
    return (
      <div className="header">
        <h1>TimeMaster</h1>
        <div style={{marginTop: '-100px'}}>
          <div className="link" onClick={setView.bind(null, 'SetClockTime')} >
            Home
          </div>
          <div className="link" onClick={setView.bind(null, 'SessionRecords')} >
            Show Session Records
          </div>
        </div>
      </div>
    );
  }
};