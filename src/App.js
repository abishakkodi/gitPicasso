import React, { Component } from 'react';
//import _ from 'lodash';
import './App.css';
import gitCalendar from './gitCalendar';
import fontLibrary from './fontLibrary';
import GitColumn from './components/GitColumn';
import DatesView from './components/DatesView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gitCalendar,
      storedDates: [],
      textInput: ''
    };

    this.modifyDate = this.modifyDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetDates = this.resetDates.bind(this);
  }

  resetDates() {
    const weeks = 52, days = 7;
    let resetCalendar = this.state.gitCalendar;
    for (let i = 0; i < weeks; i++) {
      for (let j = 0; j < days; j++) {
        resetCalendar[i].dates[j].status = false;
      }
    }
    this.state.textInput = '';
    this.setState({ resetCalendar: gitCalendar, storedDates: [] });
  }

  modifyDate(week, day, value) {
    let newGitCalendar = this.state.gitCalendar;
    if (value === undefined) {
      newGitCalendar[week].dates[day].status = !newGitCalendar[week].dates[day].status;
    } else {
      newGitCalendar[week].dates[day].status = value;
    }

    this.setState({ gitCalendar: newGitCalendar }, () => {
      this.modifyStoredDates();
    });
  }


  componentWillUpdate(nextProps, nextState) {
    const textInput = this.state.textInput;
    if (textInput !== nextState.textInput) {
      return true;
    }
  }

  modifyStoredDates() {
    let storedDates = [];
    const weeks = 52, days = 7, calendar = this.state.gitCalendar;
    for (let i = 0; i < weeks; i++) {
      for (let j = 0; j < days; j++) {
        if (calendar[i].dates[j].status) {
          const date = calendar[i].dates[j][j];
          storedDates.push(date);
        }
      }
    }
    this.setState({ storedDates });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.displayInput();
    });
  }

  displayInput() {
    if (this.state.textInput === '') {
      this.resetDates();
    } else {
      let letters = this.state.textInput.toLowerCase().split('');
      let display = [];
      let space = [false, false, false, false, false, false];

      for (let i = 0; i < letters.length; i++) {
        let letter = fontLibrary[letters[i]];
        for (var line in letter) {
          display.push(letter[line]);
        }
        display.push(space);
      }

      if (display.length < 53) {

        for (let week = 0; week < display.length; week++) {
          for (let day = 1; day < 7; day++) {
            let value = display[week][day];
            if (value) {
              this.modifyDate(week, day, value);
            }
          }
        }
      }
    }
  }


  render() {
    let columns = gitCalendar.map((week, key) => {
      return (<div className='gitColumn' key={key}>
        <GitColumn week={week} weekId={week.week}
          modifyDate={this.modifyDate} />
      </div>);
    })

    return (
      <div className="App">
        <div className="rotateScreen"> Please rotate screen horizontally </div>
        <div className="title">
          <h1>Git Commitment </h1>
          <h4>Click the squares or type to get dates for the commits</h4>
        </div>

        <div className='gitGrid'>
          {columns}
        </div>
        <div className='entry'>
          <form>
            <label> Enter Text Here </label>
            <input type='text' name='textInput' value={this.state.textInput} onChange={this.handleChange} />
          </form>
          <div
            onClick={this.resetDates}
            className='reset'> Click Here To Clear Commit Dates
          </div>
        </div>
        <DatesView dates={this.state.storedDates} />
      </div>
    );
  }
}

export default App;


