import React from 'react';

class Square extends React.Component {
constructor(props){

  super(props);
  let date = props.date[props.id];
  let status = props.date.status;
    this.state = {
      date,
      status
    }

}
 render() {
    return (
      <div className='gitSquare'>

      </div>
    );
  }
}

export default Square;