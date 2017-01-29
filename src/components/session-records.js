import React from 'react';

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
        <td>{record.time}</td>
        <td>{record.timeUsed}</td>
      </tr>)
    });
  }

  render() {
    const records = this.renderRecords();
    return (
      <div style={{ marginTop: '100px' }}>
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
