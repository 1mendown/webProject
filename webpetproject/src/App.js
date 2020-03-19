import React, { useState } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import CollapsingMenu from './components/collapsingMenu/CollapsingMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [sideDrawerState, setSideDrawerState] = useState(false);

  let collapseMenu;

  const toggleDrawerHandler = () => {
    setSideDrawerState(!sideDrawerState);
  };

  const collapseMenuHandler = () => {
    setSideDrawerState(false);
  };

  if (sideDrawerState) {
    collapseMenu = <CollapsingMenu collapseMenuHandler={collapseMenuHandler} />;
  }

  return (
    <Router>
      <div className='app'>
        <Navbar toggleDrawerHandler={toggleDrawerHandler} />
        <SideDrawer show={sideDrawerState} />
        {collapseMenu}
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' exact component={About}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
