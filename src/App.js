import React, { Component } from 'react';
import './App.css';
import gitCalendar from './gitCalendar';
import GitColumn from './components/GitColumn';


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
    }

    handleDateChange(e){
      e.preventDefault();
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

      </div>
    );
  }
}

export default App;


