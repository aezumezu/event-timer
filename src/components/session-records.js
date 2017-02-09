import React from 'react';
import ToTimeFormat from '../helpers/time';
import DownloadSession from '../helpers/download';

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
    const docTitle = `Toastmaster Event ${new Date}.csv`;
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
      <div className="btn btn-primary" onClick={DownloadSession.bind(null, this.props.data)}>
        Download</div>
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
