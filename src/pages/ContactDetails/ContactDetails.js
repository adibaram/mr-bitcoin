import React, { Component }  from 'react';
import contactService from '../../services/ContactService'

import imgAvatar from '../../assets/img_avatar.png'

import './ContactDetails.css'

class ContactDetails  extends Component {
  
  state =  { contact: {} }
  
  componentDidMount() {
    const id = '5a56640269f443a5d64b32ca';
    contactService.getContactById(id).then(contact => {
      this.setState({contact})
    })
  }

  render() {
    const contact = this.state.contact
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-details">
        <div className="contact-details-body">
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
      </div>
    )
  }
  
}

export default ContactDetails;
