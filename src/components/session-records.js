import React from 'react';

export default class ShowCountDown extends React.Component {
  renderRecords() {
    const records = this.props.route.data;
    records.map((record, index) => {
      <div key={index}>
        Speech: {record.title}
        Time Alloted: {record.time}
        Time Used: {record.timeUsed}
      </div>
    })
  }
  render() {
    return (
      <div>
      {renderRecords()}
      </div>
    );
  }
};
