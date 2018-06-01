import React from 'react';

class Square extends React.Component {
constructor(props){
  super(props);
  this.state = {
    active: false
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