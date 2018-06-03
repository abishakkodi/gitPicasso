import React, {Component} from 'react';
import '../App.css';

class Square extends Component {

 render() {
    const week = this.props.weekId, day = this.props.dateId, status = this.props.date.status, modifyDate = this.props.modifyDate;

    const modDate = () => { modifyDate(week,day);
      console.log(this);}
    return (
      <div className={status ? 'activeGitSquare' : 'inactiveGitSquare' } onClick={modDate}>

      </div>
    );
  }
}

export default Square;