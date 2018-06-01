import React from 'react';
import Square from './Square';

class GitColumn extends React.Component {
  render() {
    let init2 = Array(7).fill(1);
    return (
      <div className='gitWeek'>
        {
          init2.map((sqr,id)=>{
            return(<Square id={id} key={id * 100} />)
          })
        }

      </div>
    );
  }
}

export default GitColumn;