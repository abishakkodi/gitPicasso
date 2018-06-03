import React, { Component } from 'react';

class DateView extends Component {
  render() {
    return (
      <div>
        <h3> Commit Dates </h3>
          <div>
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
