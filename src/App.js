import React, { Component } from 'react';
import './App.css';
import gitCalendar from './gitCalendar';
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
    }

    modifyDate(week, day) {
      let newGitCalendar = this.state.gitCalendar;
      newGitCalendar[week].dates[day].status = !newGitCalendar[week].dates[day].status;
      this.setState({gitCalendar: newGitCalendar});
      this.renderDateList();
    }

    renderDateList(){
      let storedDates = [];
      const weeks = 52, days = 6, calendar = this.state.gitCalendar;
      console.log(calendar[0]);
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
      console.log(e.target.value);
      this.setState({[e.target.name]:e.target.value});
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
        <div className='gitGrid'>
          {columns2}
        </div>
        <div>
          <form>
            <label> Enter Text Here </label>
            <input type='text' name='textInput' value={this.state.textInput} onChange={this.handleChange}/>
          </form>
        </div>
        <DatesView dates={this.state.storedDates} />
      </div>
    );
  }
}

export default App;


