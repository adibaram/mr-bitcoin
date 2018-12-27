import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import contactService from '../../services/ContactService';

import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';

import './ContactPage.scss';

@inject('store')
@observer

class ContactPage extends Component {

  componentDidMount() {
    this.props.store.contactStore.fetchContacts();
  }

  contactSearch = ({search}) => {
    this.props.store.contactStore.fetchContacts({term: search});
  }


  render() {
    const contactStore = this.props.store.contactStore;

    return (
      <div className="contacts-page">
        <div className="search-container">
          <ContactFilter onFilter={this.contactSearch} />
        </div>
        <div className="contacts-container">
            <ContactList contacts={contactStore.contacts} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
