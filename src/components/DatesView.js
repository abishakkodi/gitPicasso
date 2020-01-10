import React from 'react';

const DateView = (props) => {
  return (
    <div className='datesView'>
      <h3> Commit Dates </h3>
      <p>To make the commit history above, commit on the following dates </p>

      <div className='dateList'>
        {props.dates.map((date, id) => {
          return (
            <div
              key={id}
              className="dateItem">{date}</div>
          )
        })}
      </div>
    </div>)
}

export default DateView;
