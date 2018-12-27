import React, { Component }  from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

import contactService from '../../services/ContactService';
import TransferCoins from '../../components/TransferCoins';
import MovesList from '../../components/MovesList';

import imgAvatar from '../../assets/img_avatar.png';

import './ContactDetails.scss';


@inject('store')
@observer

class ContactDetails  extends Component {
  
  // state =  { contact: {} }
  
  state = {
    currentId: ''
  };
  @observable message = ''

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.match.params.id !== prevState.currentId){
      return { currentId: nextProps.match.params.id};
    } 
    else {
        return null;
    }

  }

  constructor(props) {
    super(props);

    this.transferCoins = this.transferCoins.bind(this)
  }

  componentDidMount() {
    // const id = '5a56640269f443a5d64b32ca';
    // contactService.getContactById(id).then(contact => {
    //   this.setState({contact})
    // })
    const id = this.props.match.params.id; // params -> from url
    this.props.store.contactStore.fetchContact(id);
    this.setState({currentId: id});
  }

  async transferCoins(amount) {
    const contact = this.props.store.contactStore.selectedContact
    await this.props.store.userStore.transferCoins(contact, amount)
    this.message = "Transfer Done Succefully!"
    setTimeout(() => this.message = '', 1000);
  }

  render() {
    const contact = this.props.store.contactStore.selectedContact;

    const maxCoins = this.props.store.userStore.user.coins
    const avatar = contact.picture || imgAvatar;

    return (
      <div className="contact-details">
        <div className="contact-details-body">
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>

          <div className="transter-coins-container">
            <TransferCoins contact={contact} maxCoins={maxCoins} onTransferCoins={this.transferCoins} />
          </div>

        <div className="moves-list-container">
          <MovesList moves={this.props.store.userStore.movesToCurrContact} title="Your Moves:"/>
        </div>

        </div>
      </div>
    )
  }
  
}

export default ContactDetails;
