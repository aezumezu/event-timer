import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './style/styles.css';
import SetClockTime from './components/set-timer';
import ShowCountDown from './components/show-countdown';
import SessionRecords from './components/session-records';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      speechTime: '',
      records: []
    }
    this.setSpeechTime = this.setSpeechTime.bind(this);
    this.countTime = this.countTime.bind(this);
    this.getChartOptions = this.getChartOptions.bind(this);
  }

  getChartOptions() {
    const lastRecord = this.state.records[this.state.records.length - 1];
    const chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: lastRecord.title || 'Title'
      },
      series: [{
        data: [{
          name: "Time Used",
          y: lastRecord.timeUsed,
          color: 'green'
        }, {
          name: "Time Remaining",
          y: lastRecord.timeRemaining,
          color: 'red'
        }]
      }]
    };
    return chartOptions;
  }

  setSpeechTime(time, title) {
    const record = {}
    const speechNumber = this.state.records.length + 1;
    if (!title) {
      title = `Speech ${speechNumber}`;
    }
    record.title = title;
    record.time = time;
    record.speechNumber = speechNumber;
    const records = this.state.records;
    records.push(record);
    this.setState({ records });
    this.countTime(speechNumber);
  }

  countTime(speechNumber) {
    let speech = this.state.records[speechNumber - 1];
    speech.timeUsed = 0;
    let timer = setInterval(() => {
      speech.timeUsed += 1;
      speech.timeRemaining = speech.time - speech.timeUsed;
      const records = this.state.records;
      records[speechNumber - 1].timeUsed = speech.timeUsed;
      records[speechNumber - 1].timeRemaining = speech.timeRemaining;

      this.setState({ records });
      if (!speech.timeRemaining) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div className="app-body">
        <div>
          <div className="header">
            <h1>TimeMaster</h1>
            <div>
              <ul className="header-nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/records'>Show Session Records</Link></li>
              </ul>
            </div>
          </div>
          <div className="display-body" id="display-area">
            <Router history={browserHistory}>
              <Route path="/" component={SetClockTime} setTime={this.setSpeechTime} />
              <Route path="/showclock" component={ShowCountDown} options={this.getChartOptions} />
              <Route path="/records" component={SessionRecords} data={this.state.records} />
            </Router>
          </div>
        </div>
      </div>
    );
  }
};

render(<Main />, document.getElementById('root'));
