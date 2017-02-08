import React from 'react';
import { render } from 'react-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
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
      stopTimer: false,
      timerRunning: false
    }
    this.setSpeechTime = this.setSpeechTime.bind(this);
    this.countTime = this.countTime.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.setView = this.setView.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.toggleTimerRunning = this.toggleTimerRunning.bind(this);
  }

  setSpeechTime(time, title) {
    const record = {}
    const speechNumber = this.state.records.length + 1;
    if (!title) {
      title = `Speech ${speechNumber}`;
    }
    record.title = title;
    record.time = time;
    record.timeUsed = 0;
    record.timeRemaining = time;
    record.speechNumber = speechNumber;
    const records = this.state.records;
    records.push(record);
    this.setState({ records });
    this.setView('countDownClock');
    this.toggleTimerRunning(true);
    this.countTime(speechNumber);
  }

  startStopTimer(val) {
    this.setState({ stopTimer: val });
  }

  toggleTimerRunning(val) {
    this.setState({ timerRunning: val });
  }

  countTime(speechNumber) {
    let speech = this.state.records[speechNumber - 1];
    speech.timeUsed = 0;
    let timer = setInterval(() => {
      speech.timeUsed += 1;
      speech.timeRemaining = speech.time - speech.timeUsed;
      const records = this.state.records;
      records[speechNumber - 1].timeUsed = speech.timeUsed;
      records[speechNumber - 1].timeRemaining = speech.timeRemaining > 0 ?
        speech.timeRemaining : 0;

      this.setState({ records });
      if (this.state.stopTimer) {
        clearInterval(timer);
        this.startStopTimer(false);
        this.toggleTimerRunning(false);
      }
    }, 1000);
  }

  setView(view) {
    this.setState({ whatToRender: view });
  }

  renderBody() {
    let appBody;
    const whatToRender = this.state.whatToRender;
    const lastRecord = this.state.records[this.state.records.length - 1];

    if (whatToRender === 'SessionRecords') {
      appBody = <SessionRecords data={this.state.records} />;
    } else if (whatToRender === 'countDownClock') {
      appBody = <ShowCountDown lastRecord={lastRecord}
        stopTimer={this.startStopTimer}
        setView={this.setView}
        timerRunning={this.state.timerRunning}
        data={this.state.records} />;
    } else {
      appBody = <SetClockTime setTime={this.setSpeechTime} />;
    }

    return appBody;
  }

  render() {
    const {timerRunning} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div id="timemaster" className="text-center">
              <Header setView={this.setView} timerRunning={timerRunning} />
              <div id="display-area">
                {this.renderBody()}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div id="time-used">
              <span className="label arrowed-in">06: 23: 23</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

render(<Main />, document.getElementById('root'));
