import React from 'react';
import './ToggleDrawer.css';

const ToggleDrawer = ({ toggleDrawerHandler }) => {
  return (
    <button className='toggle-button' onClick={toggleDrawerHandler}>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
      <div className='toggle-button-line'></div>
    </button>
  );
};

export default ToggleDrawer;
