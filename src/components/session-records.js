import React from 'react';
import ToTimeFormat from '../helpers/to-time-format';

export default class SessionRecords extends React.Component {
  constructor() {
    super();
    this.renderRecords = this.renderRecords.bind(this);
  }

  renderRecords() {
    const records = this.props.data;
    return records.map((record, index) => {
      return (<tr key={index}>
        <td>{record.title}</td>
        <td>{ToTimeFormat(record.time)}</td>
        <td>{ToTimeFormat(record.timeUsed)}</td>
      </tr>)
    });
  }

  render() {
    const records = this.renderRecords();
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Speech Title</th>
              <th>Time Allotted</th>
              <th>Time Used</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    );
  }
};
