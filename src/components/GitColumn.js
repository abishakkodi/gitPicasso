import React from 'react';
import Square from './Square';

class GitColumn extends React.Component {
  render() {
    return (
      <div className='gitWeek'>
        {
          this.props.week.dates.map((date, id)=>{
            return(<Square id={id} key={id * 100} date={date}/>)
          })
        }

      </div>
    );
  }
}

export default GitColumn;