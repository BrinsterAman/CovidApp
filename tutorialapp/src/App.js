import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import About from './About';
import Search from './Search';
import Navbar from './Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path='/search' component={() => { return <Search /> }} />
      </Switch>
    </>
  );
};

export default App;
