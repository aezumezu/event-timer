import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import './style/styles.css';
import SetClockTime from './components/set-timer';
import ShowCountDown from './components/show-countdown';
import SessionRecords from './components/session-records';
import Header from './components/header';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      whatToRender: 'SetClockTime',
      speechTime: '',
      records: [],
      stopTimer: false
    }
    this.setSpeechTime = this.setSpeechTime.bind(this);
    this.countTime = this.countTime.bind(this);
    this.getChartOptions = this.getChartOptions.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.setView = this.setView.bind(this);
    this.toggleStopTimer = this.toggleStopTimer.bind(this);
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
    this.setState({ records});
    this.setView('countDownClock');
    this.countTime(speechNumber);
  }

  toggleStopTimer() {
    this.setState({stopTimer: !this.state.stopTimer});
  }

  countTime(speechNumber) {
    let speech = this.state.records[speechNumber - 1];
    speech.timeUsed = 0;
    let timer = setInterval(() => {
      speech.timeUsed += 1;
      speech.timeRemaining = speech.time - speech.timeUsed;
      const records = this.state.records;
      records[speechNumber - 1].timeUsed = speech.timeUsed;
      records[speechNumber - 1].timeRemaining = speech.timeRemaining > 0  ?
        speech.timeRemaining : 0;

      this.setState({ records });
      if (this.state.stopTimer) {
        clearInterval(timer);
        this.toggleStopTimer();
      }
    }, 1000);
  }

  setView(view) {
    this.setState({whatToRender: view });
  }

  renderBody() {
    let appBody;
    const whatToRender = this.state.whatToRender;
    if (whatToRender === 'SessionRecords') {
      appBody = <SessionRecords data={this.state.records} />;
    } else if (whatToRender === 'countDownClock') {
      appBody = <ShowCountDown options={this.getChartOptions} stopTimer={this.toggleStopTimer}/>;
    } else {
      appBody = <SetClockTime setTime={this.setSpeechTime} />;
    }
    return appBody;
  }

  render() {
    const renderBody = this.renderBody();
    return (
      <div className="app-body">
        <div>
          <Header setView={this.setView}/>
          <div className="display-body" id="display-area">
            {renderBody}
          </div>
        </div>
      </div>
    );
  }
};

render(<Main />, document.getElementById('root'));
