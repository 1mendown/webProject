import React from 'react';
import './CollapsingMenu.css';

const CollapsingMenu = ({ collapseMenuHandler }) => {
  return <div className='Collapsing-menu' onClick={collapseMenuHandler}></div>;
};

export default CollapsingMenu;
