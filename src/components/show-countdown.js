import React from 'react';
import ReactHighcharts from 'react-highcharts';

export default class ShowCountDown extends React.Component {
  render() {
    const options = this.props.options();
    const stopTimer = this.props.stopTimer;
    return (
      <div style={{ width: '100%' }}>
        <button onClick={stopTimer}>Stop Timer</button>
        <ReactHighcharts config={options} />
      </div>
    );
  }
};
