import React, { Component } from 'react';
import Square from './Square';

class GitColumn extends Component {
  render() {
    return (
      <div className='gitWeek'>
        {
          this.props.week.dates.map((dateObj, id)=>{
            return(<Square key={id * 100} date={dateObj} weekId={this.props.weekId} dateId={id}
              modifyDate={this.props.modifyDate}/>)
          })
        }

      </div>
    );
  }
}

export default GitColumn;