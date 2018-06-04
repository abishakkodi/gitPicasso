import React, { Component } from 'react';

class DateView extends Component {
  render() {
    return (
      <div className='datesView'>
        <h3> Commit Dates </h3>
          <div>
          <p>To make the commit history above, commit on the following dates </p>
          <ul>
          {this.props.dates.map((date,id)=>{
            return(
                <li key={id}>{date}</li>
              )
          })}
          </ul>
          </div>
      </div>
    );
  }
}

export default DateView;
