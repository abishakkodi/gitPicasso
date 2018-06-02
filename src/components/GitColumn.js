import React from 'react';
import Square from './Square';

class GitColumn extends React.Component {
  render() {
    return (
      <div className='gitWeek'>
        {
          this.props.week.dates.map((dateObj, id)=>{
            return(<Square key={id * 100} date={dateObj}/>)
          })
        }

      </div>
    );
  }
}

export default GitColumn;