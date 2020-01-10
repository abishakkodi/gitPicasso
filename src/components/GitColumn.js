import React from 'react';
import Square from './Square';
import '../App.css';


const GitColumn = (props) => {
  return (
    <div className='gitWeek'>
      {
        props.week.dates.map((dateObj, id) => {
          return (<Square key={id * 100} date={dateObj} weekId={props.weekId} dateId={id}
            modifyDate={props.modifyDate} />)
        })
      }

    </div>
  );
}




export default GitColumn;