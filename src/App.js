import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { inject, observer } from 'mobx-react';

import PrivateRoute from '../src/components/PrivateRoute';
import MainNav from '../src/components/NavBar';

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
      <div className="app">
        <Router>
          <div>
            {this.props.store.userStore.user && <MainNav />}
            {/* {<MainNav />} */}

            <div className="app-content">
              <Switch>
                <Route path="/signup" exact component={SignupPage} />
                {/* <PrivateRoute path="/contacts/new" component={ContactEdit} /> */}
                {/* <PrivateRoute path="/contacts/edit/:id?" component={ContactEdit} /> */}
                <PrivateRoute path="/contacts/:id" exact component={ContactDetails} />
                <PrivateRoute path="/contacts" exact component={ContactPage} />
                <PrivateRoute path="/statistics" exact component={StatisticPage} />
                <PrivateRoute path="/" component={HomePage} />  
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
