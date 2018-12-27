import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import contactService from '../../services/ContactService';

import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';

import './ContactPage.scss';

@inject('store')
@observer

class ContactPage extends Component {
  state = {contacts: []}

  componentDidMount() {
    contactService.getContacts().then(contacts => {
      this.setState({contacts})

    })
  }

  // componentDidMount() {
  //   this.props.store.contactStore.fetchContacts()
  //     .then(contacts => console.log('contacts', contacts));
  //   console.log('contactStore', this.props.store.contactStore);
  //   console.log('contacts', this.props.store.contactStore.fetchContacts());
  // }

  contactSearch = ({search}) => {
    this.props.store.contactStore.fetchContacts({term: search})
  }

  
  render() {
    return (
      <div className="contacts-page">

        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
