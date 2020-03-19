import React from 'react';
import './SideDrawer.css';

const SideDrawer = ({ show }) => {
  let drawerClass = 'side-drawer';

  if (show) {
    drawerClass = 'side-drawer open';
  }

  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <a href='/'>ABOUT</a>
        </li>
        <li>
          <a href='/'>PRODUCTS</a>
        </li>
        <li>
          <a href='/'>CONTACTS</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
