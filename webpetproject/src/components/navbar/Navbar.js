import React from 'react';
import './Navbar.css';
import ToggleDrawer from '../sideDrawer/Drawer';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDrawerHandler }) => {
  return (
    <header className='header'>
      <nav className='header-navigation'>
        <div className='toggleDrawerHandler'>
          <ToggleDrawer toggleDrawerHandler={toggleDrawerHandler} />
        </div>
        <div className='header-logo'>
          <a href='/'>THE LOGO</a>
        </div>
        <div className='create-space'> </div>
        <div className='header-navigation-items'>
          <ul>
            <Link to='/'>
              <li>
                <a href='/'>HOME</a>
              </li>
            </Link>
            <Link to='/about'>
              <li>
                <a href='/about'>ABOUT</a>
              </li>
            </Link>
            <Link>
              <li>
                <a href='/'>PRODUCTS</a>
              </li>
            </Link>
            <Link>
              <li>
                <a href='/'>CONTACTS</a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
