import React from 'react';
import '../App.css';

const Square = (props) => {

    const week = props.weekId, day = props.dateId, status = props.date.status, modifyDate = props.modifyDate;

    const modDate = () => { modifyDate(week,day)}
    return (
      <div className={status ? 'activeGitSquare' : 'inactiveGitSquare' } onClick={modDate}>

      </div>
    );
}

export default Square;