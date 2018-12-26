import React, { Component } from 'react';
import contactService from '../../services/ContactService'

import ContactList from '../../components/ContactList'

import './ContactPage.scss'

class ContactPage extends Component {
  state = {contacts: []}

  componentDidMount() {
    contactService.getContacts().then(contacts => {
      this.setState({contacts})
    })
  }

  
  render() {
    return (
      <div className="contacts-page">
        <div className="contacts-container">
            <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
