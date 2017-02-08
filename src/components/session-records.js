import React from 'react';
import ToTimeFormat from '../helpers/to-time-format';

export default class SessionRecords extends React.Component {
  constructor() {
    super();
    this.renderRecords = this.renderRecords.bind(this);
    this.renderBody = this.renderBody.bind(this);
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
  renderBody() {
    let body;
    const records = <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Speech Title</th>
            <th>Time Allotted</th>
            <th>Time Used</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRecords()}
        </tbody>
      </table>
    </div>
    const message = <div>Sorry, there is no record to display now.</div>
    body = this.props.data.length ? records :
      message;
    return body;
  }
  render() {
    return (
      <div>{this.renderBody()}</div>
    );
  }
};
