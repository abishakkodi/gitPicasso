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
      this.addDate = this.addDate.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    addDate(){

    }

    handleChange(e){
      console.log(e.target.value);
      this.setState({[e.target.name]:e.target.value});
    }

  render() {
          let init = Array(52).fill(1);
          let init2 = Array(7).fill(1);


      let columns =    init.map((item, key)=>{
                      return(<div className='gitColumn' key={key}>
                                <GitColumn />
                            </div>);
                    });

      let columns2 = gitCalendar.map((week, key)=>{
        return(<div className='gitColumn' key={key}>
                                <GitColumn week={week}/>
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


