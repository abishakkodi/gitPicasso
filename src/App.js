import React, { Component } from 'react';
import './App.css';
import gitCalendar from './gitCalendar';
import GitColumn from './components/GitColumn';


class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        gitCalendar
      };
      this.addDate = this.addDate.bind(this);
    }

    addDate(){

    }

  render() {
          let init = Array(52).fill(1);
          let init2 = Array(7).fill(1);


      let columns =    init.map((item, key)=>{
                      return(<div className='gitColumn' key={key}>
                                <GitColumn />
                            </div>);
                    })

    return (
      <div className="App">
        <div className='gitGrid'>
          {columns}
        </div>
      </div>
    );
  }
}

export default App;


