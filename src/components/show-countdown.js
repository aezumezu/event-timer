import React from 'react';
import ReactHighcharts from 'react-highcharts';

export default class ShowCountDown extends React.Component {
  render() {
    const options = this.props.route.options();
    return (
      <ReactHighcharts config={options} />
    );
  }
};
