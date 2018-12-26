import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

// import PrivateRoute from './components/PrivateRoute';
// import MainNav from './components/MainNav';

import SignupPage from '../src/pages/SignupPage';
import HomePage from '../src/pages/HomePage';
import StatisticPage from '../src/pages/StatisticPage';
import ContactPage from '../src/pages/ContactPage';
import ContactDetails from '../src/pages/ContactDetails';
// import ContactEdit from '../src/pages/ContactEdit';

import './App.scss';

@inject('store')
@observer

class App extends Component {
  render() {
    return (
      <div className="App">

       <HomePage />


      </div>
    );
  }
}

export default App;
