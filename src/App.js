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

    resetDates(){
      const weeks = 52, days = 7;
      let reset = this.state.gitCalendar;
      for(let i = 0; i < weeks; i++){
        for(let j = 0; j < days; j++){
          reset[i].dates[j].status = false;
          }
      }
      this.setState({ gitCalendar: reset, storedDates: [] });
    }

    modifyDate(week, day, value) {
      let newGitCalendar = this.state.gitCalendar;
      if(value === undefined ){
        newGitCalendar[week].dates[day].status = !newGitCalendar[week].dates[day].status;
      } else {
        newGitCalendar[week].dates[day].status = value;
      }

      this.setState({gitCalendar: newGitCalendar}, ()=>{
      this.modifyStoredDates();
      });
    }


    componentWillUpdate(nextProps, nextState) {
      console.log(nextState);
      const textInput = this.state.textInput;
      if(textInput !== nextState.textInput){
        return true;
      }
    }

    modifyStoredDates(){
      let storedDates = [];
      const weeks = 52, days = 7, calendar = this.state.gitCalendar;
      for(let i = 0; i < weeks; i++){
        for(let j = 0; j < days; j++){
          if(calendar[i].dates[j].status) {
            const date = calendar[i].dates[j][j];
            storedDates.push(date);
          }
        }
      }
      this.setState({storedDates});
    }

    handleChange(e){
      this.setState({[e.target.name]:e.target.value}, ()=>{
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
      let columns2 = gitCalendar.map((week, key)=>{
        return(<div className='gitColumn' key={key}>
                                <GitColumn week={week} weekId={week.week}
                                modifyDate={this.modifyDate}/>
                            </div>);
      })

    return (
      <div className="App">
        <div className="title">
        <h1>Git Commitment </h1>
        <h4>Click the squares or type to get dates for the commits</h4>
        </div>

        <div className='gitGrid'>
          {columns2}
        </div>
        <div className='entry'>
          <form>
            <label> Enter Text Here </label>
            <input type='text' name='textInput' value={this.state.textInput} onChange={this.handleChange}/>
          </form>
          <button onClick={this.resetDates}> Reset Dates </button>
        </div>
        <DatesView dates={this.state.storedDates} />
      </div>
    );
  }
}

export default App;


