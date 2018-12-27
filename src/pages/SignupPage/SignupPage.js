import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable  } from 'mobx';

import bitcoinImg from '../../assets/icons/bitcoin.png'
import './SignupPage.scss'

@inject('store')
@observer
class SignupPage extends Component {
  @observable name = '';

  onInputChange = (event) => {
    this.name = event.target.value
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    
    this.props.store.userStore.signup(this.name)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="signup">
        <div className="signup-icon">
          <img src={bitcoinImg} alt="bitcoin" width="64px" height="64px" />
          <div className="signup-title">Welcome to Bitcoin transfer system</div>
          <div className="signup-title">You can manage you Bitcoins and transfer to other users</div>
        </div>

        <form onSubmit={this.onFormSubmit} className="signup-form">
            <div className="signup-title">First, please enter your name:</div>

            <input value={this.name} onChange={this.onInputChange} />
            
            <div className="actions-container">
              <button type="submit">Sign up</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SignupPage;
